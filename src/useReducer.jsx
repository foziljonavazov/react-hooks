import React from "react";
import FadeInSection from "./FadeInSection";

export default function UseReducerExample({ copyCode }) {
  return (
    <FadeInSection>
      <div className="reducer">
        <div className="header">
          <h1>useReducer</h1>
          <p>
            <strong>useReducer</strong> — bu React Hook bo‘lib, u{" "}
            <span>kompleks holat</span>larni boshqarishda{" "}
            <strong>useState</strong>ga alternativ hisoblanadi.
          </p>
          <p>
            Bu hook <code>reducer funksiyasi</code> va{" "}
            <code>initial state</code> bilan ishlaydi.
          </p>
        </div>

        <div className="syntax">
          <h2>Sintaksisi</h2>
          <div className="code-block">
            <pre>
              <code>
                {`const [state, dispatch] = useReducer(reducerFunction, initialState);`}
              </code>
            </pre>
          </div>
        </div>

        <div className="example">
          <h2>Oddiy hisoblagich (counter) misoli</h2>
          <div className="code-block">
            <button
              className="copy-btn"
              data-id="code-reducer-1"
              onClick={() => copyCode("code-reducer-1")}
            >
              <i className="fa-solid fa-copy"></i> Nusxa olish
            </button>
            <pre>
              <code id="code-reducer-1">
                {`import React, { useReducer } from "react";

// 1. reducer funksiyasi
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

// 2. komponent
function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h3>Count: {state.count}</h3>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Counter;`}
              </code>
            </pre>
          </div>
        </div>

        <div className="facts">
          <h2>Muhim faktlar</h2>
          <ul>
            <li>
              <code>useReducer</code> funksiyasi komponentni soddaroq va
              mantiqiy qiladi.
            </li>
            <li>
              Ko‘p bosqichli (multiple step) holatlarni boshqarish uchun ideal.
            </li>
            <li>
              <code>dispatch</code> yordamida actionlar yuboriladi.
            </li>
          </ul>
        </div>

        <div className="steps">
          <h2>Asosiy bosqichlar</h2>
          <ol>
            <li>
              <strong>Reducer yozish:</strong> (state, action) qabul qiladi
            </li>
            <li>
              <strong>useReducer chaqirish:</strong> reducer + boshlang‘ich
              holat
            </li>
            <li>
              <strong>dispatch:</strong> action yuborish uchun ishlatiladi
            </li>
          </ol>
        </div>

        <div className="uses">
          <h2>Qo‘llanilish sohalari</h2>
          <ul>
            <li>Formani boshqarish (inputlar)</li>
            <li>Kompleks interaktiv komponentlar (masalan, tabs, modals)</li>
            <li>Redux’ga o‘xshash holat boshqaruvi</li>
          </ul>
        </div>
      </div>
    </FadeInSection>
  );
}
