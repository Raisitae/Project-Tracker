import { useTimerContext } from "../../hooks/useTimerContext.jsx";

export function SaveTime() {
  const { pushTimes, resetTimer, project } = useTimerContext();

  const handleSave = () => {
    pushTimes(project);
    resetTimer();
  };

  return (
    <button className="btn-primary bg-red-500" onClick={handleSave}>
      Save
    </button>
  );
}
