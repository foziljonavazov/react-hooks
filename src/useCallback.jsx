import React from "react";
import FadeInSection from "./FadeInSection";


export default function UseCallbackExample({ copyCode }) {
  return (
    <FadeInSection>

    <div className="callback">
      <div className="header">
        <h1>useCallback</h1>
        <p>
          <strong>useCallback</strong> — bu hook komponent har safar qayta render bo‘lsa ham, funksiyani qayta yaratmaslik uchun ishlatiladi. 
          <span>useMemo qiymatni eslab qolsa</span>, <strong>useCallback funksiyani eslab qoladi</strong>.
        </p>
      </div>

      <div className="syntax">
        <h2>Sintaksisi</h2>
        <div className="code-block">
          <pre>
            <code>
              {`const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);`}
            </code>
          </pre>
        </div>
      </div>

      <div className="example">
        <h2>Oddiy misol</h2>
        <div className="code-block">
          <button
            className="copy-btn"
            data-id="code-callback-1"
            onClick={() => copyCode("code-callback-1")}
          >
            <i className="fa-solid fa-copy"></i> Nusxa olish
          </button>
          <pre>
            <code id="code-callback-1">
              {`import React, { useState, useCallback } from "react";

function CallbackButton({ handleClick }) {
  console.log("Button render bo‘ldi");
  return <button onClick={handleClick}>+1</button>;
}

function UseCallbackApp() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <h3>Count: {count}</h3>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Matn kiriting"
      />
      <CallbackButton handleClick={increment} />
    </div>
  );
}

export default UseCallbackApp;`}
            </code>
          </pre>
        </div>
      </div>

      <div className="facts">
        <h2>Muhim faktlar</h2>
        <ul>
          <li><code>useCallback</code> <strong>funksiyalarni</strong> eslab qoladi.</li>
          <li>Performance uchun, ayniqsa <strong>child component</strong>lar <code>React.memo</code> bilan optimizatsiya qilinganda ishlatiladi.</li>
          <li>Har safar yangi funksiya yaratishning oldini oladi.</li>
        </ul>
      </div>

      <div className="steps">
        <h2>Asosiy bosqichlar</h2>
        <ol>
          <li>Funksiyani <code>useCallback</code> bilan o‘rang.</li>
          <li><code>[]</code> dependency ro‘yxatida o‘zgaruvchilarni belgilang.</li>
          <li>Ushbu funksiya child komponentga props sifatida yuborilganda, qayta renderning oldi olinadi.</li>
        </ol>
      </div>

      <div className="uses">
        <h2>Qo‘llanilishi</h2>
        <ul>
          <li>React.memo bilan ishlovchi child komponentlar</li>
          <li>Performance optimizatsiya</li>
          <li>Raqamli interfeyslar (counterlar, formalar, filtrlar)</li>
        </ul>
      </div>
    </div>
    </FadeInSection>

  );
}

