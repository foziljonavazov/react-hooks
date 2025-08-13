import React from "react";
import FadeInSection from "./FadeInSection";

export default function UseLayoutEffectExample({ copyCode }) {
  return (
    <FadeInSection>
      <div className="layout-effect">
        <div className="header">
          <h1>useLayoutEffect</h1>
          <p>
            <strong>useLayoutEffect</strong> — bu <code>useEffect</code> ga
            o‘xshash hook bo‘lib, render bo‘lgandan so‘ng lekin browser
            chizmasidan oldin ishga tushadi. Bu, ayniqsa layout (joylashuv)
            o‘lchami, DOM o‘zgarishlari bilan ishlaganda kerak bo‘ladi.
          </p>
        </div>

        <div className="syntax">
          <h2>Sintaksisi</h2>
          <div className="code-block">
            <pre>
              <code>
                {`useLayoutEffect(() => {
  // Kodlar
}, [dependency]);`}
              </code>
            </pre>
          </div>
        </div>

        <div className="example">
          <h2>DOM joylashuvini o‘lchash</h2>
          <div className="code-block">
            <button
              className="copy-btn"
              data-id="code-layout-1"
              onClick={() => copyCode("code-layout-1")}
            >
              <i className="fa-solid fa-copy"></i> Nusxa olish
            </button>
            <pre>
              <code id="code-layout-1">
                {`import React, { useLayoutEffect, useRef, useState } from "react";

function LayoutExample() {
  const boxRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (boxRef.current) {
      setWidth(boxRef.current.getBoundingClientRect().width);
    }
  }, []);

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: "70%",
          height: "100px",
          backgroundColor: "skyblue",
          margin: "20px auto",
        }}
      >
        <p>Bu box width: {width}px</p>
      </div>
    </div>
  );
}

export default LayoutExample;`}
              </code>
            </pre>
          </div>
        </div>

        <div className="facts">
          <h2>Asosiy farqlari</h2>
          <ul>
            <li>
              <strong>useEffect:</strong> renderdan keyin, browser chizish
              (paint) tugagach ishlaydi.
            </li>
            <li>
              <strong>useLayoutEffect:</strong> renderdan keyin, **lekin
              paintdan oldin** ishlaydi.
            </li>
            <li>
              Agar DOM elementlar joylashuviga qarab JavaScript hisobi bo‘lsa —{" "}
              <code>useLayoutEffect</code> ishlatiladi.
            </li>
          </ul>
        </div>

        <div className="steps">
          <h2>3 bosqichda ishlash tartibi</h2>
          <ol>
            <li>
              <code>ref</code> bilan DOM elementga ulaniladi
            </li>
            <li>
              <code>useLayoutEffect</code> yordamida element o‘lchami olinadi
            </li>
            <li>Bu qiymatni state orqali ekranga chiqarish mumkin</li>
          </ol>
        </div>

        <div className="uses">
          <h2>Qaerda ishlatiladi?</h2>
          <ul>
            <li>DOM element o‘lchami/pozitsiyasini olish</li>
            <li>Animatsiyadan oldin o‘lchov qilish</li>
            <li>Scroll pozitsiyasini tiklash</li>
            <li>Render va chizish orasida DOMga muhim o‘zgartirish kiritish</li>
          </ul>
        </div>

        <div className="remember">
          <h2>Eslatma:</h2>
          <ul>
            <li>
              Har doim useEffect ni ishlatish afzal, agar u yetarli bo‘lsa.
            </li>
            <li>
              Faqat vizual sakrashlar (layout flicker) bo‘lsa yoki o‘lchovlar
              noto‘g‘ri chiqsa — useLayoutEffect ishlating.
            </li>
            <li>
              Brauzer "paint" qilgunga qadar JavaScript ishga tushadi — shuning
              uchun foydalanuvchi hech narsa sezmaydi.
            </li>
          </ul>
        </div>
      </div>
    </FadeInSection>
  );
}
