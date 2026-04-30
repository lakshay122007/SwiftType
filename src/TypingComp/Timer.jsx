import { useEffect } from "react";

export default function Timer({ timeLeft, setTimeLeft, isRunning }) {
  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  return <h2>{timeLeft}s</h2>;
}