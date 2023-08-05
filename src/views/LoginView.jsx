import { useState } from "react";
import { useProjectContext } from "../hooks/useProjectContext";

export const LoginView = () => {
  const [change, setChange] = useState("");
  const { handleUser } = useProjectContext();

  const handleChange = (e) => {
    setChange(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUser(change);
    localStorage.setItem("user", JSON.stringify(change));
  };

  return (
    <div className="project-container">
      <form>
        <label htmlFor="user">User</label>
        <input type="text" name="user" onChange={handleChange} />
        <button className="btn-primary  bg-blue-500" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
