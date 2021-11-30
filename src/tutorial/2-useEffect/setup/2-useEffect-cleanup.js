import React, { useState, useEffect } from "react";

// cleanup function
// second argument
/**
 * W celu unkinięcia memory leaks należy użyć cleanupa dla useEffects. Jeżeli tego nie zrobimy
 * eventlistener 'resize' będzie dodawany po każdym re-renderingu zgodnie z działaniem useEffetcs
 * @returns
 */
const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("Czyszczenie");
      window.removeEventListener("resize", checkSize);
    };
  });

  console.log(size);
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
