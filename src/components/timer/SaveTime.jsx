import { useProjectContext } from "../../hooks/useProjectContext.jsx";

export function SaveTime({ time, title }) {
  const { pushTimes } = useProjectContext();
  const handleSave = () => {
    console.log(title);
    pushTimes(time, title);
  };
  return <button onClick={handleSave}>Save</button>;
}
