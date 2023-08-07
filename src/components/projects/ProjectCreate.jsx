import { useProjectContext } from "../../hooks/useProjectContext";
import { useState } from "react";
import { Button } from "../button/Button";
import { Input } from "../input/Input";

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
        <Input placeholder={"Name your project"} handleChange={handleChange} />
        <Button
          handleClick={handleSubmit}
          addClass={"primary"}
          text="Create"
          type="submit"
        />
      </form>
    </div>
  );
}
