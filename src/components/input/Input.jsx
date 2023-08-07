export function Input({ type, id, placeholder, handleChange, addClass }) {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      onChange={handleChange}
      className={`input-form ${addClass}`}
    />
  );
}
