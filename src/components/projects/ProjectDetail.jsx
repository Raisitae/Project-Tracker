import { ProjectInput } from "./ProjectInput";
import { Timer } from "../timer/Timer";
import { useState, useEffect } from "react";

import { useTimerContext } from "../../hooks/useTimerContext.jsx";

export function ProjectDetail() {
  const [name, setName] = useState("");
  const [sum, setSum] = useState(0);
  const { loading, times, getTimesBack, formatTime } = useTimerContext();
  const { project } = useTimerContext();

  const [timeProject, setTimeProject] = useState([]);

  useEffect(() => {
    if ((loading == false) & (project !== undefined)) {
      setTimeProject([]);
      console.log(loading);

      mapTimes();
      sumTimes();
    }
  }, [loading]);

  const mapTimes = () => {
    times.map((time) => {
      timeProject.push(time.time);
    });
    console.log(timeProject);
  };

  const sumTimes = () => {
    let adding = 0;
    timeProject.forEach((time) => {
      adding += time;
    });
    setSum(formatTime(adding));
  };

  return (
    <div>
      <h1 className="text-lg">this is {project}</h1>
      <Timer title={name} />
      <button
        className="btn-primary bg-blue-500"
        onClick={getTimesBack}
        style={{ margin: "0 10px 0 0" }}>
        get times
      </button>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div>
          <h1>Previous times</h1>
          {times.map((time) => {
            return (
              <div key={time.id}>
                <p>{formatTime(time.time)}</p>
              </div>
            );
          })}
          <h1>Total time</h1>
          <p>{sum}</p>
        </div>
      )}
    </div>
  );
}
