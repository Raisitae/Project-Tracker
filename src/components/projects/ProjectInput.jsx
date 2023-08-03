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
      <input
        type="text"
        id="projectName"
        name="projectName"
        onChange={handleChange}
        placeholder="Name your proyect"
        className="border border-gray-300 rounded-lg p-2 m-2"
      />
      <button
        className="btn-primary bg-blue-500"
        onClick={handleSubmit}
        type="submit">
        Create
      </button>
    </form>
  );
}
