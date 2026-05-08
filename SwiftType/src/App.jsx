import { useState } from "react";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import TypingArea from "./components/TypingArea";
import ResultScreen from "./components/ResultScreen";
import { useTypingEngine } from "./hooks/useTypingEngine";


export default function App() {
  const [mode, setMode] = useState("words");
  const [time, setTime] = useState(30);

  const { textArray, userInput, status, timer, stats, reset } = useTypingEngine(mode, time);

  return (
    <div className="min-h-screen bg-bg text-muted font-mono flex flex-col items-center justify-center px-8">
      <div className="w-full max-w-4xl flex flex-col gap-10">

        <Header mode={mode} time={time} />

        <Toolbar
          mode={mode}
          time={time}
          onModeChange={setMode}
          onTimeChange={setTime}
        />

        <div className="text-center text-accent text-6xl font-bold leading-none">
          {time === Infinity ? "∞" : timer}
        </div>

        {status === "finished" ? (
          <ResultScreen stats={stats} onRestart={reset} />
        ) : (
        <TypingArea textArray={textArray} userInput={userInput} status={status} />

        )}
        {status !== "finished" && (
        <div className="flex items-center justify-center gap-2 text-sm text-muted">
          <span>start typing to begin</span>
          <p className="border border-muted rounded px-2 py-0 text-xs text-accent font-mono">tab</p>
          <span>or</span>
          <p className="border border-muted rounded px-2 py-0 text-xs text-accent font-mono">esc</p>
          <span>to restart</span>
        </div>
        )}

      </div>
    </div>
  );
}