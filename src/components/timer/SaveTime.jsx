import { useProjectContext } from "../../hooks/useProjectContext.jsx";

export function SaveTime({ title }) {
  const { pushTimes, resetTimer, setLoading } = useProjectContext();

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
