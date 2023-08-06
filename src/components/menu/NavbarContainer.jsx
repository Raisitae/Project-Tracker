import { useEffect } from "react";
import { useProjectContext } from "../../hooks/useProjectContext.jsx";
import { useUserContext } from "../../hooks/useUserContext.jsx";

export function NavbarContainer() {
  const { loading, projects, getProjects, selectProject } = useProjectContext();
  const { user } = useUserContext();

  useEffect(() => {
    if (!loading & (user !== "")) {
      console.log(loading);
      console.log(projects);
    }
  }, [loading, projects]);

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
              <div key={project.id}>
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
      <button className="btn-primary bg-blue-500" onClick={getProjects}>
        try projects
      </button>
    </div>
  );
}
