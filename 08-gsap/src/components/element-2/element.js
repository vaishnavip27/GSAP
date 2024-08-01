import React, { useRef } from "react";
import "./element.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Element() {
  //to animate each element we can't give ID to each element, so we'll use a ref to track the elements
  // const boxRef = useRef();
  // useGSAP(() => {
  //   gsap.from(boxRef.current, {
  //     rotate: 360,
  //     delay: 0.5,
  //     duration: 1,
  //     scale: 0,
  //     opacity: 0,
  //   });
  // });

  //Scope concept
  useGSAP(
    () => {
      gsap.from(".box", {
        rotate: 360,
        scale: 0,
        duration: 1,
        opacity: 0,
        delay: 0.5,
      });
    },
    { scope: ".container" }
  );

  return (
    <main>
      <div className="container">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
      <div className="container2">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
    </main>
  );
}
