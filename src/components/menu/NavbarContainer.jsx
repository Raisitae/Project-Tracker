import { useEffect } from "react";
import { useProjectContext } from "../../hooks/useProjectContext.jsx";
import { useTimerContext } from "../../hooks/useTimerContext.jsx";

export function NavbarContainer() {
  const { loading, selectProject, projects, getProjects } = useProjectContext();
  const { setProject } = useTimerContext();

  useEffect(() => {
    if (!loading) {
      getProjects();
      console.log(projects);
    }
  }, [loading]);

  const handleClick = (e) => {
    selectProject(e);
  };

  return (
    <div className="nav-bar">
      {projects == undefined ? (
        <h1>login</h1>
      ) : (
        <div>
          {projects.map((project) => {
            return (
              <div key={projects.indexOf(project)}>
                <button
                  onClick={() => {
                    handleClick(project.title);
                  }}
                  className="project-button">
                  {project.title ? project.title : "Sin titulo"}
                </button>
              </div>
            );
          })}
        </div>
      )}
      <button
        className="btn-primary bg-blue-500"
        onClick={() => {
          setProject("");
        }}>
        Add a project
      </button>
      <button className="btn-primary bg-blue-500" onClick={getProjects}>
        get projects
      </button>
    </div>
  );
}
