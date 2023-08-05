import { useEffect } from "react";
import { useProjectContext } from "../../hooks/useProjectContext.jsx";

export function NavbarContainer() {
  const { loading, times, user, handleProject } = useProjectContext();

  useEffect(() => {
    if (!loading & (user !== "")) {
      console.log(loading);
      console.log(times);
    }
  }, [loading]);

  const handleClick = (e) => {
    handleProject(e);
  };

  const mapTimes = times.map((time) => {
    return (
      <div key={time.id}>
        <button
          onClick={() => {
            handleClick(time.title);
          }}
          className="project-button">
          {time.title ? time.title : "Sin titulo"}
        </button>
      </div>
    );
  });

  return (
    <div className="nav-bar">
      {user === "" ? (
        <h1>login</h1>
      ) : (
        <div>
          <p className="text-slate-200 font-semibold">Welcome {user}</p>
          {mapTimes}
        </div>
      )}
    </div>
  );
}
