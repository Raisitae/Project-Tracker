import { Timer } from "../timer/Timer";
import { useState, useEffect } from "react";

import { useTimerContext } from "../../hooks/useTimerContext.jsx";

export function ProjectDetail() {
  const [name] = useState("");
  const [sum, setSum] = useState(0);
  const { loading, times, formatTime } = useTimerContext();
  const { project } = useTimerContext();

  const [timeProject, setTimeProject] = useState([]);

  useEffect(() => {
    if ((loading == false) & (project !== undefined)) {
      setTimeProject([]);
      console.log(loading);
      mapTimes();
      sumTimes();
    }
  }, [loading, project]);

  const mapTimes = () => {
    console.log("map", times);
    times.map((time) => {
      timeProject.push(time.time);
    });
    console.log(timeProject);
  };
  //esto ya no hace falta porque solo recibo los tiempos del titulo, hay que reescribir

  const sumTimes = () => {
    let adding = 0;
    const length = timeProject.length;
    for (let i = 0; i < length; i++) {
      adding + timeProject[i];
    }
    console.log("adding", adding);
    setSum(formatTime(adding));
  };

  return (
    <div>
      <h1 className="text-lg">this is {project}</h1>
      <Timer title={name} />

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
