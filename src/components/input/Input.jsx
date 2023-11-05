export function Input({ type, value, id, placeholder, handleChange, addClass }) {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      onChange={handleChange}
      className={`input-form ${addClass}`}
      value={value}
    />
  );
}