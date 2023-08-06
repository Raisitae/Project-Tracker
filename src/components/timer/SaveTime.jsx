import { useTimerContext } from "../../hooks/useTimerContext.jsx";

export function SaveTime({ title }) {
  const { pushTimes, resetTimer, setLoading } = useTimerContext();

  const handleSave = () => {
    pushTimes(title);
    resetTimer();
    setLoading(true);
  };

  return (
    <button className="btn-primary bg-red-500" onClick={handleSave}>
      Save
    </button>
  );
}
