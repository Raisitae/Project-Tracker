import { useProjectContext } from "../../hooks/useProjectContext";
import { useTimerContext } from "../../hooks/useTimerContext";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { useState } from "react";

export function ProjectHeader() {
  const { project } = useTimerContext();
  const { deleteProject, editing, setEditing, editProject } =
    useProjectContext();
  const [change, setChange] = useState(project);

  const handleDelete = () => {
    deleteProject();
  };

  const handleChange = (e) => {
    setChange(e.target.value);
  };

  const handleClick = () => {
    editProject(change);
    setEditing(!editing);
  };
  return (
    <div>
      <h1 className="text-lg">this is {project}</h1>
      <button onClick={handleDelete} className="btn-primary bg-blue-500">
        Delete project
      </button>
      <button
        onClick={() => setEditing(!editing)}
        className="btn-primary bg-blue-500">
        Edit project
      </button>
      {editing ? (
        <div>
          <Input type="text" value={project} handleChange={handleChange} />
          <Button
            text="Edit"
            type="submit"
            addClass="primary"
            handleClick={handleClick}
          />
        </div>
      ) : (
        <h1>not editing</h1>
      )}
    </div>
  );
}
