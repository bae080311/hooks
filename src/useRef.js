import { useRef } from "react";

function App() {
  const input = useRef();
  setTimeout(() => console.log(input.current), 5000);
  return (
    <div className="App">
      <div>Hi</div>
      <input ref={input} placeholder="lalala"></input>
    </div>
  );
}
