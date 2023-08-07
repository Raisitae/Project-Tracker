import { ProjectDetail } from "./ProjectDetail.jsx";
import { ProjectCreate } from "./ProjectCreate.jsx";
import { useCallback } from "react";
import { useTimerContext } from "../../hooks/useTimerContext.jsx";

export function ProjectContainer() {
  const { project } = useTimerContext();

  const projectListener = useCallback(() => {
    if (project !== undefined && project !== "") {
      return <ProjectDetail />;
    } else {
      return <ProjectCreate />;
    }
  }, [project]);

  return <div>{projectListener()}</div>;
}
