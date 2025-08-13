import React from "react";
import FadeInSection from "./FadeInSection";

export default function UseContextExample({ copyCode }) {
  return (
    <FadeInSection>
      <div className="context">
        <div className="header">
          <h1>useContext</h1>
          <p>
            <strong>useContext</strong> — bu React Hook bo‘lib, komponentlar
            o‘rtasida ma’lumot ulashish (prop drilling'siz) imkonini beradi.
          </p>
          <p>
            U kontekst (context) orqali <span>global holat (global state)</span>
            ga kirishni osonlashtiradi.
          </p>
          <p>
            <strong>React.createContext()</strong> orqali yaratilgan kontekstga
            ulanish uchun <code>useContext(Context)</code> ishlatiladi.
          </p>
        </div>

        <div className="syntax">
          <h2>useContext sintaksisi</h2>
          <div className="code-block">
            <pre>
              <code>{`const value = useContext(MyContext);`}</code>
            </pre>
          </div>
        </div>

        <div className="example">
          <h2>Oddiy misol</h2>
          <div className="code-block">
            <button
              className="copy-btn"
              data-id="code-context-1"
              onClick={() => copyCode("code-context-1")}
            >
              <i className="fa-solid fa-copy"></i> Nusxa olish
            </button>
            <pre>
              <code id="code-context-1">
                {`import React, { createContext, useContext } from "react";

// 1. Context yaratish
const ThemeContext = createContext();

// 2. Provider komponenti
function ThemeProvider({ children }) {
  const theme = "dark";
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. useContext bilan ishlatish
function ChildComponent() {
  const theme = useContext(ThemeContext);
  return <p>Tanlangan tema: {theme}</p>;
}

// 4. Asosiy App
function App() {
  return (
    <ThemeProvider>
      <ChildComponent />
    </ThemeProvider>
  );
}

export default App;`}
              </code>
            </pre>
          </div>
        </div>

        <div className="facts">
          <h2>Muhim faktlar</h2>
          <ul>
            <li>useContext faqat React Context bilan ishlaydi.</li>
            <li>
              Har safar context qiymati o‘zgarsa, komponent qaytadan render
              bo‘ladi.
            </li>
            <li>
              Context bilan ishlaganda provider va consumer aniq ishlatilishi
              kerak.
            </li>
          </ul>
        </div>

        <div className="steps">
          <h2>Context bilan ishlash bosqichlari</h2>
          <ol>
            <li>
              <strong>Context yaratish:</strong>{" "}
              <code>const MyContext = createContext();</code>
            </li>
            <li>
              <strong>Provider yaratish:</strong> qiymatni kontekstga uzatish
            </li>
            <li>
              <strong>useContext bilan foydalanish:</strong> kontekst qiymatini
              olish
            </li>
          </ol>
        </div>

        <div className="uses">
          <h2>Qo‘llanish sohalari</h2>
          <ul>
            <li>Tema (dark/light) boshqaruvi</li>
            <li>Til tanlash (i18n)</li>
            <li>Foydalanuvchi ma’lumotlarini uzatish (auth context)</li>
            <li>Katta komponent daraxtlarida prop uzatishni oldini olish</li>
          </ul>
        </div>
      </div>
    </FadeInSection>
  );
}
