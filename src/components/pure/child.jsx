import React, { useRef } from "react";

const Child = ({ name, send, update }) => {
  const messageRef = useRef("");
  const nameRef = useRef("");

  function pressBoton() {
    const text = messageRef.current.placeholder;
    alert(`Text in Input: ${text}`);
  }

  function pressBottonParams(text) {
    alert(`Text: ${text}`);
  }

  function submitName(e) {
    e.preventDefault();
    update(nameRef.current.value)
    nameRef.current.value = ''
  }

  return (
    <div style={{ background: "Cyan", padding: "30px" }}>
      <p onMouseOver={() => console.log("onMouseOver")}>Hello {name}</p>
      <button onClick={() => console.log("Boton 1 pulsado")}>Button 1</button>
      <button onClick={() => pressBoton()}>Button 2</button>
      <button onClick={() => pressBottonParams("Helo")}>Button 3</button>
      <input
        onFocus={() => console.log("Input Focused")}
        onChange={(e) => console.log("Input change:", e.target.value)}
        onCopy={() => console.log("Copy text from Input")}
        type="text"
        placeholder="Send a text to the father"
        ref={messageRef}
      />
      <button onClick={() => send(messageRef.current.placeholder)}>
        Send message
      </button>

      <div style={{ marginTop: "20px" }}>
        <form onSubmit={(e) => submitName(e)}>
          <input ref={nameRef} placeholder="New name" type="text" />
          <button type="submit"> Update name </button>
        </form>
      </div>
    </div>
  );
};

export default Child;
