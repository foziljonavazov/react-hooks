import React, { useState, useEffect } from "react";
import "./css/fade-in.css"; 

const FadeInOnMount = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`fade-in-once ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
};

export default FadeInOnMount;
