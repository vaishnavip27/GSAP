import React, { useState } from "react";
import "./index.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function App() {
  const [circle, setCircle] = useState(0);

  //The values between -500 and 500 will be divided by 10
  const random = gsap.utils.random(-500, 500, 100);

  useGSAP(() => {
    gsap.to(".circle", {
      x: circle,
      duration: 0.4,
    });
  }, [circle]);

  return (
    <main>
      <button
        onClick={() => {
          setCircle(random);
        }}
      >
        Animate
      </button>
      <div className="circle"></div>
    </main>
  );
}
