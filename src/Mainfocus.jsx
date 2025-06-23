import { useRef } from "react";

function Focus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // ✅ use .focus(), not .Focus()
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Click me</button>
    </div>
  );
}

export default Focus;