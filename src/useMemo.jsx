import React from "react";
import FadeInSection from "./FadeInSection";

export default function UseMemoExample({ copyCode }) {
  return (
    <FadeInSection>
      <div className="memo">
        <div className="header">
          <h1>useMemo</h1>
          <p>
            <strong>useMemo</strong> — bu hook hisoblash (calculation) og‘ir
            bo‘lgan funksiyalarni <span>keshlab</span> (memorize) turadi.
            Natijada har safar komponent qayta render bo‘lsa ham, hisob-kitoblar
            faqat kerak bo‘lganda bajariladi.
          </p>
          <p>
            Bu optimizatsiya uchun ishlatiladi va ko‘proq{" "}
            <strong>performance</strong>ni oshirishda foydali.
          </p>
        </div>

        <div className="syntax">
          <h2>Sintaksisi</h2>
          <div className="code-block">
            <pre>
              <code>
                {`const memoizedValue = useMemo(() => {
  return expensiveCalculation(param);
}, [param]);`}
              </code>
            </pre>
          </div>
        </div>

        <div className="example">
          <h2>Oddiy misol (og‘ir hisoblash)</h2>
          <div className="code-block">
            <button
              className="copy-btn"
              data-id="code-memo-1"
              onClick={() => copyCode("code-memo-1")}
            >
              <i className="fa-solid fa-copy"></i> Nusxa olish
            </button>
            <pre>
              <code id="code-memo-1">
                {`import React, { useMemo, useState } from "react";

function slowFunction(num) {
  console.log("Og‘ir hisoblash...");
  let result = 0;
  for (let i = 0; i <= 1000000000; i++) {
    result += num;
  }
  return result;
}

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(false);

  const memoizedResult = useMemo(() => slowFunction(count), [count]);

  return (
    <div>
      <h3>Natija: {memoizedResult}</h3>
      <button onClick={() => setCount(count + 1)}>Hisoblashni oshir</button>
      <button onClick={() => setOther(!other)}>
        Boshqa holatni o‘zgartir
      </button>
    </div>
  );
}

export default ExpensiveComponent;`}
              </code>
            </pre>
          </div>
        </div>

        <div className="facts">
          <h2>Muhim faktlar</h2>
          <ul>
            <li>
              Har safar <code>count</code> o‘zgarmasa, hisoblash{" "}
              <strong>qayta bajarilmaydi</strong>.
            </li>
            <li>
              <code>useMemo</code> faqat <strong>og‘ir hisoblash</strong> yoki{" "}
              <strong>keraksiz qayta render</strong> bo‘lsa ishlatiladi.
            </li>
            <li>
              Har doim emas, faqat kerak bo‘lganda ishlatish tavsiya etiladi.
            </li>
          </ul>
        </div>

        <div className="steps">
          <h2>Asosiy bosqichlar</h2>
          <ol>
            <li>
              <strong>Og‘ir funksiya</strong> yarating (masalan:
              `slowFunction`).
            </li>
            <li>
              <code>useMemo</code> orqali keshlang:
            </li>
            <li>
              <code>useMemo(() =&gt; slowFunction(arg), [arg])</code>
            </li>
          </ol>
        </div>

        <div className="uses">
          <h2>Qo‘llanilish sohalari</h2>
          <ul>
            <li>Og‘ir hisoblash funksiyalar</li>
            <li>Sort/filtrlash/transformatsiya funksiyalar</li>
            <li>Table, grafik, statistik hisoblar</li>
          </ul>
        </div>
      </div>
    </FadeInSection>
  );
}
