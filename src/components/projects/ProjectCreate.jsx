import { useProjectContext } from "../../hooks/useProjectContext";
import { useState } from "react";

export function ProjectCreate() {
  const { handleProject } = useProjectContext();
  const [change, setChange] = useState("");

  const handleChange = (e) => {
    setChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submit = change;
    handleProject(submit);
  };

  return (
    <div>
      <h1 className="text-lg">
        We need to create a new project, or select a new one from the menu!
      </h1>
      <form>
        <input
          className="border mx-2 border-gray-500"
          type="text"
          onChange={handleChange}
        />
        <button
          onClick={handleSubmit}
          className="btn btn-primary bg-blue-500"
          type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
