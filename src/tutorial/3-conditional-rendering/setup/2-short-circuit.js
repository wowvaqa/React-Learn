import React, { useState } from "react";
// short-circuit evaluation
// ternary operator - operator trójskładnikowy

/**
 * JSX uniemożiwa stosowanie ifa ponieważ if nie zwraca wartości
 * @returns
 */
const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  /* operator || (lub), zmienna text jest 'false' ponieważ <== short circut
   zmienna 'text' to pusty string 
   'warunek ? zrób jeżeli TRUE : zrób jeżeli FALSE <== ternary operator*/
  const firstValue = text || "hello world";
  /* 'hello world zostanie zwrócone jeżeli zmienna
   'text' nie będzie pusta */
  const secondValue = text && "hello world";

  // Operatory: &&, || zastępują funkcję if w  bloku return; && -> TRUE; || -> FALSE
  return (
    <>
      <h1>{firstValue}</h1>
      <h1>value:{secondValue}</h1>
      <h1>{text || "TRUE"}</h1>
      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
        }}
      >
        toggle error
      </button>
      {isError && <h1>ERROR...</h1>}
      {isError ? <h1>IS ERROR</h1> : <h1>NO ERROR</h1>}
    </>
  );
};

export default ShortCircuit;
