import React from "react";
import FadeInSection from "./FadeInSection";

export default function UseImperativeHandleExample({ copyCode }) {
  return (
    <FadeInSection>
      <div className="imperative-handle">
        <div className="header">
          <h1>useImperativeHandle</h1>
          <p>
            <strong>useImperativeHandle</strong> — bu <code>ref</code> orqali
            tashqi komponentga{" "}
            <strong>
              faqat kerakli funksiyalar yoki qiymatlarni ochib berish
            </strong>{" "}
            imkonini beradi.
          </p>
          <p>
            Odatda <code>forwardRef</code> bilan birga ishlatiladi.
          </p>
        </div>

        <div className="syntax">
          <h2>Sintaksisi</h2>
          <div className="code-block">
            <pre>
              <code>
                {`useImperativeHandle(ref, () => ({
  // ochiq funksiyalar yoki qiymatlar
}));`}
              </code>
            </pre>
          </div>
        </div>

        <div className="example">
          <h2>Oddiy misol — inputga tashqaridan fokus berish</h2>
          <div className="code-block">
            <button
              className="copy-btn"
              data-id="code-imp-1"
              onClick={() => copyCode("code-imp-1")}
            >
              <i className="fa-solid fa-copy"></i> Nusxa olish
            </button>
            <pre>
              <code id="code-imp-1">
                {`import React, {
  useImperativeHandle,
  useRef,
  forwardRef
} from "react";

// Bolalar komponenti
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
    clearInput: () => {
      inputRef.current.value = "";
    },
  }));

  return <input ref={inputRef} type="text" placeholder="Type something..." />;
});

// Asosiy komponent
function ParentComponent() {
  const inputRef = useRef();

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focusInput()}>
        Fokus berish
      </button>
      <button onClick={() => inputRef.current.clearInput()}>
        Tozalash
      </button>
    </div>
  );
}

export default ParentComponent;`}
              </code>
            </pre>
          </div>
        </div>

        <div className="facts">
          <h2>Nega kerak?</h2>
          <ul>
            <li>
              <strong>Encapsulation (ichki qoidalarni yashirish)</strong> —
              faqat kerakli API ni ochasiz
            </li>
            <li>
              <strong>forwardRef</strong> bilan ishlaydi (React ichki `ref`
              uzatadi)
            </li>
            <li>
              <strong>Parent → Child</strong> ga `ref` orqali nazorat kerak
              bo‘lsa ishlatiladi
            </li>
          </ul>
        </div>

        <div className="steps">
          <h2>3 bosqichda ishlash tartibi</h2>
          <ol>
            <li>Child komponent `forwardRef` orqali ochiladi</li>
            <li>Ichki `ref` yaratiladi</li>
            <li>
              `useImperativeHandle` bilan tashqi `ref` ga kerakli metodlar
              ochiladi
            </li>
          </ol>
        </div>

        <div className="uses">
          <h2>Qaerda ishlatiladi?</h2>
          <ul>
            <li>Custom Inputlar, Modal oynalar, Toasterlar</li>
            <li>Canvas elementlar, audio/video playerlar</li>
            <li>Child komponent ustidan tashqi nazorat kerak bo‘lsa</li>
          </ul>
        </div>
        <div className="remember">
          <h2>Eslatma:</h2>
          <ul>
            <li>
              <code>
                &#114;&#101;&#102;&#46;&#99;&#117;&#114;&#114;&#101;&#110;&#116;&#32;&#61;&#32;&#123;&#125;
              </code>{" "}
              deb o‘zingiz yozmaslik uchun useImperativeHandle ishlatiladi.
            </li>
            <li>
              Bu hook child komponentning ichki ishlarini nazoratli ravishda
              tashqariga chiqaradi.
            </li>
            <li>Har doim forwardRef bilan birga ishlaydi.</li>
          </ul>
        </div>
      </div>
    </FadeInSection>
  );
}
