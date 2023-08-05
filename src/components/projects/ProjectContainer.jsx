import { ProjectDetail } from "./ProjectDetail.jsx";
import { Userinfo } from "../Userinfo/Userinfo.jsx";

export function ProjectContainer() {
  return (
    <div className="project-container">
      <Userinfo />
      <ProjectDetail />
    </div>
  );
}
