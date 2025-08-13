import React from "react";
import { useState, useRef } from "react";
import "./css/App.css";
import UseStateExample from "./useState.jsx";
import UseEffectExample from "./useEffect.jsx";
import UseContextExample from "./useContext.jsx";
import UseReducerExample from "./useReducer.jsx";
import UseMemoExample from "./useMemo.jsx";
import UseCallbackExample from "./useCallback.jsx";
import UseRefExample from "./useRef.jsx";
import UseLayoutEffectExample from "./useLayoutEffect.jsx";
import UseImperativeHandleExample from "./useImperativeHandle.jsx";
import UseDebugValueExample from "./useDebugValue.jsx";
import FadeInSection from "./FadeInSection";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("home");

  const refs = {
    useState: useRef(null),
    useEffect: useRef(null),
    useContext: useRef(null),
    useReducer: useRef(null),
    useMemo: useRef(null),
    useCallback: useRef(null),
    useRef: useRef(null),
    useLayoutEffect: useRef(null),
    useImperativeHandle: useRef(null),
    useDebugValue: useRef(null),
  };

  const changeStatus = (type) => {
    setStatus(type);
    setTimeout(() => {
      refs[type]?.current?.({ behavior: "smooth" });
    }, 100);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function copyCode(id) {
    const codeEl = document.getElementById(id);
    if (!codeEl) return;
    navigator.clipboard.writeText(codeEl.innerText).then(() => {
      const btn = document.querySelector(`button[data-id="${id}"]`);
      if (!btn) return;
      const original = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Nusxalandi!';
      setTimeout(() => {
        btn.innerHTML = original;
      }, 1500);
    });
  }

  function handleSpa() {
    const header = document.querySelector("header");
    const why = document.querySelector(".why");
    const rules = document.querySelector(".rules");

    if (header) header.style.display = "none";
    if (why) why.style.display = "none";
    if (rules) rules.style.display = "none";
  }

  const handleHome = () => {
    setStatus("home");
    const header = document.querySelector("header");
    const why = document.querySelector(".why");
    const rules = document.querySelector(".rules");

    if (header) header.style.display = "block";
    if (why) why.style.display = "block";
    if (rules) rules.style.display = "block";
    setIsOpen(false);
  };

  return (
    <div className="app">
      <div className={`burger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <aside className={isOpen ? "aside open" : "aside"}>
        <i className="fa-solid fa-xmark" onClick={toggleMenu}></i>
        <button onClick={handleHome}>Home</button>
        <button
          onClick={() => {
            changeStatus("useState");
            handleSpa();
          }}
        >
          Use State
        </button>
        <button
          onClick={() => {
            changeStatus("useEffect");
            handleSpa();
          }}
        >
          Use Effect
        </button>
        <button
          onClick={() => {
            changeStatus("useContext");
            handleSpa();
          }}
        >
          Use Context
        </button>
        <button
          onClick={() => {
            changeStatus("useReducer");
            handleSpa();
          }}
        >
          Use Reducer
        </button>
        <button
          onClick={() => {
            changeStatus("useMemo");
            handleSpa();
          }}
        >
          Use Memo
        </button>
        <button
          onClick={() => {
            changeStatus("useCallback");
            handleSpa();
          }}
        >
          Use Callback
        </button>
        <button
          onClick={() => {
            changeStatus("useRef");
            handleSpa();
          }}
        >
          Use Ref
        </button>
        <button
          onClick={() => {
            changeStatus("useLayoutEffect");
            handleSpa();
          }}
        >
          Use Layout Effect
        </button>
        <button
          onClick={() => {
            changeStatus("useImperativeHandle");
            handleSpa();
          }}
        >
          Use Imperative Handle
        </button>
        <button
        onClick={() => {
          changeStatus("useDebugValue");
          handleSpa();
        }}
        >Use Debug Value</button>
      </aside>

      <main className="main-content">
        {status === "useState" && (
          <div ref={refs.useState}>
            <UseStateExample copyCode={copyCode} />
          </div>
        )}
        {status === "useEffect" && (
          <div ref={refs.useEffect}>
            <UseEffectExample copyCode={copyCode} />
          </div>
        )}
        {status === "useContext" && (
          <div ref={refs.useContext}>
            <UseContextExample copyCode={copyCode} />
          </div>
        )}
        {status === "useReducer" && (
          <div ref={refs.useReducer}>
            <UseReducerExample copyCode={copyCode} />
          </div>
        )}
        {status === "useMemo" && (
          <div ref={refs.useMemo}>
            <UseMemoExample copyCode={copyCode} />
          </div>
        )}
        {status === "useCallback" && (
          <div ref={refs.useCallback}>
            <UseCallbackExample copyCode={copyCode} />
          </div>
        )}
        {status === "useRef" && (
          <div ref={refs.useRef}>
            <UseRefExample copyCode={copyCode} />
          </div>
        )}
        {status === "useLayoutEffect" && (
          <div ref={refs.useLayoutEffect}>
            <UseLayoutEffectExample copyCode={copyCode} />
          </div>
        )}
        {status === "useImperativeHandle" && (
          <div ref={refs.useImperativeHandle}>
            <UseImperativeHandleExample copyCode={copyCode} />
          </div>
        )}
        {status === "useDebugValue" && (
          <div ref={refs.useDebugValue}>
            <UseDebugValueExample copyCode={copyCode} />
          </div>
        )}
      </main>

      <FadeInSection>
        <header>
          <h1>React Hooks</h1>
          <h3>
            React Hooks — bu React 16.8 versiyasidan boshlab joriy qilingan
            yangi funksionallik bo‘lib, ular yordamida class componentlardan
            foydalanmasdan turib holat (state) va boshqa React xususiyatlarini
            funksional komponentlarda ishlatish mumkin.
          </h3>
        </header>

        <section className="why">
          <h1>Nima uchun React Hooks kerak?</h1>
          <h5>Oldin:</h5>
          <div className="code-block">
            <button
              className="copy-btn"
              data-id="code-old"
              onClick={() => copyCode("code-old")}
            >
              <i class="fa-solid fa-copy"></i> Nusxa olish
            </button>
            <pre>
              <code id="code-old">
                {" "}
                &#99;&#108;&#97;&#115;&#115;
                &#77;&#121;&#67;&#111;&#109;&#112;&#111;&#110;&#101;&#110;&#116;
                &#101;&#120;&#116;&#101;&#110;&#100;&#115;
                &#82;&#101;&#97;&#99;&#116;&#46;&#67;&#111;&#109;&#112;&#111;&#110;&#101;&#110;&#116;
                &#123;&#10;
                &nbsp;&nbsp;&#99;&#111;&#110;&#115;&#116;&#114;&#117;&#99;&#116;&#111;&#114;&#40;&#41;
                &#123;&#10;
                &nbsp;&nbsp;&nbsp;&nbsp;&#115;&#117;&#112;&#101;&#114;&#40;&#41;&#59;&#10;
                &nbsp;&nbsp;&nbsp;&nbsp;&#116;&#104;&#105;&#115;&#46;&#115;&#116;&#97;&#116;&#101;
                &#61; &#123; &#99;&#111;&#117;&#110;&#116;&#58; &#48;
                &#125;&#59;&#10; &nbsp;&nbsp;&#125;&#10; &#10;
                &nbsp;&nbsp;&#114;&#101;&#110;&#100;&#101;&#114;&#40;&#41;
                &#123;&#10;
                &nbsp;&nbsp;&nbsp;&nbsp;&#114;&#101;&#116;&#117;&#114;&#110;
                &#40;&#10;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;&#98;&#117;&#116;&#116;&#111;&#110;
                &#111;&#110;&#67;&#108;&#105;&#99;&#107;&#61;&#123;&#40;&#41;
                &#61;&gt;
                &#116;&#104;&#105;&#115;&#46;&#115;&#101;&#116;&#83;&#116;&#97;&#116;&#101;&#40;&#123;
                &#99;&#111;&#117;&#110;&#116;&#58;
                &#116;&#104;&#105;&#115;&#46;&#115;&#116;&#97;&#116;&#101;&#46;&#99;&#111;&#117;&#110;&#116;
                &#43; &#49; &#125;&#41;&#125;&gt;&#10;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#67;&#108;&#105;&#99;&#107;&#101;&#100;
                &#123;&#116;&#104;&#105;&#115;&#46;&#115;&#116;&#97;&#116;&#101;&#46;&#99;&#111;&#117;&#110;&#116;&#125;
                &#116;&#105;&#109;&#101;&#115;&#10;
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;&#47;&#98;&#117;&#116;&#116;&#111;&#110;&gt;&#10;
                &nbsp;&nbsp;&nbsp;&nbsp;&#41;&#59;&#10; &nbsp;&nbsp;&#125;&#10;
                &#125;&#10;
              </code>
            </pre>
          </div>
          <h5>Hooks bilan:</h5>
          <div className="code-block">
            <button
              className="copy-btn"
              data-id="code-hooks"
              onClick={() => copyCode("code-hooks")}
            >
              <i class="fa-solid fa-copy"></i> Nusxa olish
            </button>
            <pre>
              <code id="code-hooks">
                &#105;&#109;&#112;&#111;&#114;&#116; &#123;
                &#117;&#115;&#101;&#83;&#116;&#97;&#116;&#101; &#125;
                &#102;&#114;&#111;&#109;
                &#34;&#114;&#101;&#97;&#99;&#116;&#34;&#59;&#10; &#10;
                &#102;&#117;&#110;&#99;&#116;&#105;&#111;&#110;
                &#77;&#121;&#67;&#111;&#109;&#112;&#111;&#110;&#101;&#110;&#116;&#40;&#41;
                &#123;&#10; &nbsp;&nbsp;&#99;&#111;&#110;&#115;&#116;
                &#91;&#99;&#111;&#117;&#110;&#116;&#44;
                &#115;&#101;&#116;&#67;&#111;&#117;&#110;&#116;&#93; &#61;
                &#117;&#115;&#101;&#83;&#116;&#97;&#116;&#101;&#40;&#48;&#41;&#59;&#10;
                &#10; &nbsp;&nbsp;&#114;&#101;&#116;&#117;&#114;&#110;
                &#40;&#10;
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;&#98;&#117;&#116;&#116;&#111;&#110;
                &#111;&#110;&#67;&#108;&#105;&#99;&#107;&#61;&#123;&#40;&#41;
                &#61;&gt;
                &#115;&#101;&#116;&#67;&#111;&#117;&#110;&#116;&#40;&#99;&#111;&#117;&#110;&#116;
                &#43; &#49;&#41;&#125;&gt;&#10;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#67;&#108;&#105;&#99;&#107;&#101;&#100;
                &#123;&#99;&#111;&#117;&#110;&#116;&#125;
                &#116;&#105;&#109;&#101;&#115;&#10;
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;&#47;&#98;&#117;&#116;&#116;&#111;&#110;&gt;&#10;
                &nbsp;&nbsp;&#41;&#59;&#10; &#125;
              </code>
            </pre>
          </div>
          <p>
            <strong>
              Hooks Reactni soddalashtiradi, qayta foydalanishni osonlashtiradi
              va class componentga bog‘liqlikni yo‘qotadi.
            </strong>
          </p>
        </section>

        <section className="rules">
          <h4>Hooklardan foydalanishda qoidalar:</h4>
          <h6> React Hooklar: </h6>
          <ul>
            <li>
              Faqat funksional komponent yoki custom hook ichida chaqiriladi
            </li>
            <li>
              Shartlar ichida chaqirib bo‘lmaydi (masalan, <span>if</span>,{" "}
              <span>for</span>)
            </li>
            <li>Har doim bir xil tartibda chaqirilishi kerak</li>
          </ul>
        </section>
      </FadeInSection>
    </div>
  );
}
