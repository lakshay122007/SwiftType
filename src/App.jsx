import { useState, useEffect } from 'react';
import getRandomWords from './TypingComp/WordsGen.jsx';
import Timer from './TypingComp/Timer.jsx';



export default function App() {
  const [words, setWords] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    setWords(getRandomWords(30));
  }, []);

  return (
    <div>
      <h1>SwiftType</h1>
      <p style={{ lineHeight: "2", fontSize: "20px" }}>{words}</p>
   <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} isRunning={isRunning}/>
    </div>
  
  );
}