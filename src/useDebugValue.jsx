import React from "react";
import FadeInSection from "./FadeInSection";

export default function UseDebugValueExample({ copyCode }) {
  return (
    <FadeInSection>
      <div className="debug-value">
        <div className="header">
          <h1>useDebugValue</h1>
          <p>
            <strong>useDebugValue</strong> — bu faqat <code>custom hook</code>lar
            ichida ishlatiladigan maxsus hook bo‘lib, u React Developer Tools
            orqali hook holatini ko‘rsatadi.
          </p>
          <p>
            Bu hook foydalanuvchiga emas, faqat ishlab chiquvchiga yordam beradi.
          </p>
        </div>

        <div className="syntax">
          <h2>Sintaksisi</h2>
          <div className="code-block">
            <pre>
              <code>
                {`useDebugValue(value);
// yoki
useDebugValue(value, formatFunction);`}
              </code>
            </pre>
          </div>
        </div>

        <div className="example">
          <h2>Oddiy misol — online statusni ko‘rsatish</h2>
          <div className="code-block">
            <button
              className="copy-btn"
              data-id="code-debug-1"
              onClick={() => copyCode("code-debug-1")}
            >
              <i className="fa-solid fa-copy"></i> Nusxa olish
            </button>
            <pre>
              <code id="code-debug-1">
                {`import { useState, useEffect, useDebugValue } from "react";

// Custom hook
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useDebugValue(isOnline ? "Online ✅" : "Offline ❌");

  return isOnline;
}

// Parent Component
function StatusDisplay() {
  const isOnline = useOnlineStatus();

  return (
    <p>Status: {isOnline ? "Online" : "Offline"}</p>
  );
}

export default StatusDisplay;`}
              </code>
            </pre>
          </div>
        </div>

        <div className="facts">
          <h2>Nega kerak?</h2>
          <ul>
            <li>
              <strong>Debug vaqtida</strong> custom hook holatini React DevTools orqali ko‘rish uchun.
            </li>
            <li>
              <strong>Ko‘p murakkab hooklar</strong>ni tushunishni yengillashtiradi.
            </li>
            <li>
              Ishlab chiquvchilarga hookni tahlil qilishda yordam beradi.
            </li>
          </ul>
        </div>

        <div className="steps">
          <h2>3 bosqichda ishlash tartibi</h2>
          <ol>
            <li>Custom hook yaratiladi</li>
            <li>Ichida kerakli holat boshqariladi</li>
            <li>
              <code>useDebugValue()</code> bilan bu holat React DevTools'da ko‘rsatiladi
            </li>
          </ol>
        </div>

        <div className="uses">
          <h2>Qaerda ishlatiladi?</h2>
          <ul>
            <li>Murakkab yoki qayta ishlatiladigan hooklarda</li>
            <li>Yangi dasturchilar uchun hookni tushunarli qilishda</li>
            <li>React DevTools orqali debuggingda</li>
          </ul>
        </div>

        <div className="remember">
          <h2>Eslatma:</h2>
          <ul>
            <li>
              <code>useDebugValue</code> faqat <strong>custom hook</strong> ichida ishlaydi.
            </li>
            <li>
              Foydalanuvchiga hech qanday ta’siri yo‘q, bu faqat devtools uchun.
            </li>
            <li>
              Hook holatini formatlab ko‘rsatish uchun <code>formatFunction</code> ham yozish mumkin.
            </li>
          </ul>
        </div>
      </div>
    </FadeInSection>
  );
}
