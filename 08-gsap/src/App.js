import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import "./components/app.css";
import Element from "./components/element-2/element";

export default function App() {
  const gsapRef = useRef();

  useLayoutEffect(() => {
    gsap.to(gsapRef.current, {
      x: 900,
      duration: 1,
      delay: 1,
      rotate: 180,
    });
  }, []);

  return (
    <>
      <main>
        <div ref={gsapRef} className="box"></div>
      </main>
      <Element />
    </>
  );
}
