import { useRef, useEffect, useState } from "react";

export default function TypingArea({ textArray, userInput }) {
  const charRefs = useRef([]);
  const [caretPos, setCaretPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const index = userInput.length;
    const el = charRefs.current[index];
    const container = containerRef.current;
    if (!el || !container) return;
    const charRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    setCaretPos({
      x: charRect.left - containerRect.left,
      y: charRect.top - containerRect.top,
    });
  }, [userInput]);

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none cursor-default"
      style={{ minHeight: "8rem" }}
    >
      <div
        className="absolute w-0.5 rounded-sm"
        style={{
          height: "1.6rem",
          backgroundColor: "#8be9fd",
          transform: `translate(${caretPos.x}px, ${caretPos.y}px)`,
          transition: "transform 100ms ease-out",
          zIndex: 10,
        }}
      />
      <div
        style={{
          fontSize: "1.35rem",
          lineHeight: "2.4rem",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        {textArray.map((char, i) => {
          let color;
          if (i < userInput.length) {
            color = userInput[i] === char ? "#8be9fd" : "#ff5555";
          } else {
            color = "#4a5580";
          }
          return (
            <span
              key={i}
              ref={(el) => (charRefs.current[i] = el)}
              style={{ color }}
            >
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
}