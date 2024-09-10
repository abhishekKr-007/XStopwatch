import { useState, useEffect } from "react";
import React from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleStart = () => {
    setFlag((prev) => !prev);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleReset = () => {
    setTimer(0);
    setFlag(false);
  };
  useEffect(() => {
    let timerId;
    if (flag) {
      timerId = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerId);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [flag]);

  return (
    <div>
      <h1>Stopwatch</h1>
      <div style={{ paddingBottom: "15px" }}>Time: {formatTime(timer)}</div>
      <button onClick={handleStart}>{flag ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;
