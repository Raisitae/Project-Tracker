export function Button({ addClass, type, text, style, handleClick }) {
  return (
    <button
      onClick={handleClick}
      type={type}
      className={`btn-primary ${addClass}`}
      style={style}>
      {text}
    </button>
  );
}
