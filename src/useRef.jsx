import React from "react";
import FadeInSection from "./FadeInSection";

export default function UseRefExample({ copyCode }) {
  return (
    <FadeInSection>
      <div className="ref">
        <div className="header">
          <h1>useRef</h1>
          <p>
            <strong>useRef</strong> — bu React hook bo‘lib, DOM elementlarga
            to‘g‘ridan-to‘g‘ri murojaat qilish yoki o‘zgarmas (persistent)
            qiymatlarni saqlash uchun ishlatiladi.
            <span>useRef ishlatilganda komponent qayta render bo‘lmaydi</span>.
          </p>
        </div>

        <div className="syntax">
          <h2>Sintaksisi</h2>
          <div className="code-block">
            <pre>
              <code>{`const myRef = useRef(initialValue);`}</code>
            </pre>
          </div>
        </div>

        <div className="example">
          <h2>Oddiy misol: inputga avtomatik fokus</h2>
          <div className="code-block">
            <button
              className="copy-btn"
              data-id="code-ref-1"
              onClick={() => copyCode("code-ref-1")}
            >
              <i className="fa-solid fa-copy"></i> Nusxa olish
            </button>
            <pre>
              <code id="code-ref-1">
                {`import React, { useRef, useEffect } from "react";

function UseRefApp() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h3>useRef bilan inputga avtomatik fokus</h3>
      <input ref={inputRef} type="text" placeholder="Ismingizni kiriting" />
    </div>
  );
}

export default UseRefApp;`}
              </code>
            </pre>
          </div>
        </div>

        <div className="example">
          <h2>Qiymatni saqlash: renderlar oralig‘ida hisoblash</h2>
          <div className="code-block">
            <button
              className="copy-btn"
              data-id="code-ref-2"
              onClick={() => copyCode("code-ref-2")}
            >
              <i className="fa-solid fa-copy"></i> Nusxa olish
            </button>
            <pre>
              <code id="code-ref-2">
                {`import React, { useRef, useState } from "react";

function Counter() {
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const handleClick = () => {
    countRef.current += 1;
    alert("Ref count: " + countRef.current);
  };

  return (
    <div>
      <h3>Render count: {renderCount}</h3>
      <button onClick={handleClick}>Ref orqali +1</button>
      <button onClick={() => setRenderCount((r) => r + 1)}>Rerender</button>
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
              <code>useRef</code> DOM elementlarga to‘g‘ridan-to‘g‘ri kirish
              uchun ishlatiladi: <code>ref.current</code>
            </li>
            <li>
              <code>useRef</code> orqali o‘zgarmas qiymatlar saqlansa, komponent
              qayta render bo‘lmaydi
            </li>
            <li>
              <code>useEffect</code> ichida `ref.current` ni ko‘p ishlatiladi
              (masalan: fokus, o‘lchov, scroll, animatsiya)
            </li>
          </ul>
        </div>

        <div className="steps">
          <h2>Asosiy bosqichlar</h2>
          <ol>
            <li>
              <code>useRef()</code> orqali ref yarating
            </li>
            <li>
              Uni DOM elementga{" "}
              <code>
                &#114;&#101;&#102;&#61;&#123;&#114;&#101;&#102;&#78;&#97;&#109;&#101;&#125;
              </code>{" "}
              orqali bog‘lang
            </li>
            <li>
              <code>ref.current</code> orqali unga kirish mumkin
            </li>
          </ol>
        </div>

        <div className="uses">
          <h2>Qo‘llanilishi</h2>
          <ul>
            <li>Inputlarga avtomatik fokus berish</li>
            <li>Scroll holatini saqlash</li>
            <li>O‘zgarmas qiymatlarni saqlash (timer, id, counter, holat)</li>
            <li>DOM bilan to‘g‘ridan-to‘g‘ri ishlash</li>
          </ul>
        </div>
      </div>
    </FadeInSection>
  );
}
