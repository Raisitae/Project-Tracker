import { ProjectInput } from "./ProjectInput";
import { Timer } from "../timer/Timer";
import { useState, useEffect } from "react";
import { useProjectContext } from "../../hooks/useProjectContext.jsx";

export function ProjectDetail() {
  const [name, setName] = useState("");
  const [sum, setSum] = useState(0);
  const handleName = (name) => {
    setName(name);
  };
  const { loading, times, getTimesBack, formatTime, user } =
    useProjectContext();

  const [timeProject, setTimeProject] = useState([]);
  useEffect(() => {
    if ((loading === false) & (user !== "")) {
      setTimeProject([]);
      console.log(loading);
      console.log(times);
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
      {name !== "" ? (
        <h3 className="text-xl tracking-wide">{name}</h3>
      ) : (
        <ProjectInput handleName={handleName} />
      )}
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
