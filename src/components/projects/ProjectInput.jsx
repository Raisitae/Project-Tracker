import { useState } from "react";

export function ProjectInput({ handleName }) {
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(input);
    handleName(name);
  };

  return (
    <form>
      <label htmlFor="projectName" style={{ margin: "0 10px 0 0" }}>
        Project Name
      </label>
      <input
        type="text"
        id="projectName"
        name="projectName"
        onChange={handleChange}
      />
      <button onClick={handleSubmit} type="submit">
        Create
      </button>
    </form>
  );
}
