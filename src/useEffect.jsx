import React from "react";
import FadeInSection from "./FadeInSection";

export default function UseEffectExample({ copyCode }) {
  return (
    <FadeInSection>
      <div className="effect">
        <div className="header">
          <h1>useEffect</h1>
          <p>
            <strong>useEffect</strong> — bu React Hook bo‘lib, komponent ichida
            <span> yon ta’sirlar (side effects)</span>ni boshqarishga xizmat
            qiladi.
          </p>
          <p>
            Masalan: <span>API chaqiruvi</span>, <span>setTimeout</span>,{" "}
            <span>DOM bilan ishlash</span>, yoki <span>event listener</span>{" "}
            kabi holatlar.
          </p>
          <p>
            Bu hook <strong>React 16.8</strong> versiyasidan boshlab paydo
            bo‘lgan.
          </p>
        </div>

        <div className="syntax">
          <h2>useEffect sintaksisi</h2>
          <div className="code-block">
            <pre>
              <code>
                {`useEffect(() => {
  // Effekt kodi
  return () => {
    // Tozalash kodi
  };
}, [dependency]);`}
              </code>
            </pre>
          </div>
        </div>

        <div className="example">
          <h2>Oddiy misol</h2>
          <div className="code-block">
            <button
              className="copy-btn"
              data-id="code-effect-1"
              onClick={() => copyCode("code-effect-1")}
            >
              <i className="fa-solid fa-copy"></i> Nusxa olish
            </button>
            <pre>
              <code id="code-effect-1">
                {`import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Komponent render bo‘ldi");
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
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
            <li>useEffect faqat funksional komponent ichida ishlaydi.</li>
            <li>
              Dependency massividagi o‘zgarishlar bilan qayta ishga tushadi.
            </li>
            <li>
              Tozalash funksiyasi unmount bo‘lganda yoki dependency o‘zgarganda
              chaqiriladi.
            </li>
          </ul>
        </div>

        <div className="types">
          <h2>useEffect turlari</h2>
          <ul>
            <li>
              <strong>Bo‘sh dependency:</strong> Faqat bir marta (mount)
              ishlaydi.
              <pre>
                <code>{`useEffect(() => {
  console.log("Bir marta ishlaydi");
}, []);`}</code>
              </pre>
            </li>
            <li>
              <strong>State yoki props bilan:</strong> O‘sha qiymat o‘zgarganda
              ishlaydi.
              <pre>
                <code>{`useEffect(() => {
  console.log("count o‘zgarganda");
}, [count]);`}</code>
              </pre>
            </li>
            <li>
              <strong>Tozalash funksiyasi:</strong> Interval, listener va boshqa
              side effect'larni tozalash uchun.
              <pre>
                <code>{`useEffect(() => {
  const interval = setInterval(() => {
    console.log("Ishlamoqda");
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}, []);`}</code>
              </pre>
            </li>
          </ul>
        </div>

        <div className="commonUses">
          <h2>Qo‘llanilishi</h2>
          <ul>
            <li>API chaqirish</li>
            <li>Timer (setTimeout, setInterval)</li>
            <li>Event listener qo‘shish va olib tashlash</li>
            <li>DOM bilan bevosita ishlash</li>
            <li>Formani kuzatish yoki validatsiya qilish</li>
          </ul>
        </div>

        <div className="asyncWarning">
          <h2>async bilan ishlatish</h2>
          <p>
            <strong>useEffect</strong> to‘g‘ridan-to‘g‘ri <code>async</code>{" "}
            bo‘lolmaydi. Quyidagicha yozish kerak:
          </p>
          <pre>
            <code>{`useEffect(() => {
  async function fetchData() {
    const res = await fetch("...");
    const data = await res.json();
    console.log(data);
  }
  fetchData();
}, []);`}</code>
          </pre>
        </div>
      </div>
    </FadeInSection>
  );
}
