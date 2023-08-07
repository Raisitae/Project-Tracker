import { useEffect } from "react";
import { useTimerContext } from "../../hooks/useTimerContext.jsx";
import { Button } from "../button/Button.jsx";

export function Timer() {
  const {
    resetTimer,
    time,
    setTime,
    timerOn,
    setTimerOn,
    setTimeDisplay,
    timeDisplay,
    formatTime,
    project,
    pushTimes,
  } = useTimerContext();

  useEffect(() => {
    if (timerOn) {
      const interval = setInterval(() => {
        setTime(time + 1);
      }, 1000);
      setTimeDisplay(formatTime(time));

      return () => clearInterval(interval);
    }
  }, [timerOn, time]);

  const handleStart = () => {
    setTimerOn(true);
  };

  const handlePause = () => {
    setTimerOn(false);
  };

  const handleReset = () => {
    resetTimer();
  };

  const handleSave = () => {
    pushTimes(project);
    resetTimer();
  };

  return (
    <div>
      <h1 className="text-6xl font-bold tracking-wider font-mono text-black sm:text-6xl my-8">
        {timeDisplay}
      </h1>
      <Button
        addClass={"primary"}
        handleClick={timerOn ? handlePause : handleStart}
        style={{ margin: "0 10px 0 0" }}
        text={timerOn ? "Pause" : time === 0 ? "Start" : "Resume"}
      />
      <Button
        addClass={"primary"}
        handleClick={handleReset}
        style={{ margin: "0 10px 0 0" }}
        text="Reset"
      />
      <Button
        addClass={"danger"}
        handleClick={handleSave}
        style={{ margin: "0 10px 0 0" }}
        text="Save"
      />
    </div>
  );
}
