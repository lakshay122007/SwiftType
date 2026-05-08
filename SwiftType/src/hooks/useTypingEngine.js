import { useState, useEffect, useCallback, useRef } from "react";
import { getText } from "../data/textData";

export function useTypingEngine(mode, timeLimit) {
    
    const [textArray, setTextArray] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [status, setStatus] = useState("waiting");
    const [timer, setTimer] = useState(timeLimit);
    const [stats, setStats] = useState({ wpm: 0, accuracy: 0 });

    const intervalRef = useRef(null);
    const startTimeRef = useRef(null);

    const loadText = useCallback((m) => {
    const raw = getText(m, "medium");
    setTextArray(raw.split(""));
    setUserInput("");
    setStatus("waiting");
    setTimer(timeLimit);
    setStats({ wpm: 0, accuracy: 0 });
    if (intervalRef.current) clearInterval(intervalRef.current);
    }, [timeLimit]);

    useEffect(() => {
        loadText(mode);
    }, [mode, timeLimit]);

    const finishTest = useCallback(() => {
        clearInterval(intervalRef.current);
        setStatus("finished");
        setUserInput((prev) => {
        setTextArray((ta) => {
            const totalTyped = prev.length;
            const correct = prev.split("").filter((ch, i) => ch === ta[i]).length;

            const minutes = timeLimit === Infinity
            ? (Date.now() - startTimeRef.current) / 60000
            : timeLimit / 60;
            const wpm = Math.round((correct / 5) / minutes);
            const accuracy = totalTyped === 0 ? 0 : Math.round((correct / totalTyped) * 100);
            setStats({ wpm, accuracy });
            return ta;
        });
        return prev;
        });
    }, [timeLimit]);

    const startTimer = useCallback(() => {
        startTimeRef.current = Date.now();
        if (timeLimit === Infinity) return;
        intervalRef.current = setInterval(() => {
        setTimer((prev) => {
            if (prev <= 1) {
            clearInterval(intervalRef.current);
            finishTest();
            return 0;
            }
            return prev - 1;
        });
        }, 1000);
    }, [timeLimit, finishTest]);

    useEffect(() => {
        const handleKeyDown = (e) => {
        if (status === "finished") return;
        if (e.key === "Tab" || e.key === "Escape") {
            e.preventDefault();
            loadText(mode);
            return;
        }  
        if (e.ctrlKey || e.altKey || e.metaKey) return;
        if (e.key === " ") e.preventDefault();

        if (status === "waiting") {
            setStatus("typing");
            startTimer();
        }

        setUserInput((prev) => {
            if (e.key === "Backspace") return prev.slice(0, -1);
            if (prev.length >= textArray.length) return prev;
            const next = prev + e.key;
            if (next.length === textArray.length) {
            setTimeout(() => finishTest(), 0);
            }
            return next;
        });
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [status, textArray, mode, startTimer, finishTest, loadText]);

    return { textArray, userInput, status, timer, stats, reset: () => loadText(mode) };
    }