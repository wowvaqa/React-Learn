import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

/**
 * Dzięki 'useRef' można ustawić referencje do obiektu DOM, w poniższym przykładzie
 * useRef jest na 'input'
 *
 */

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };

  /**
   * UseRef zaraz po wyrenderowaniu strony ustawia focus na obiekcie DOM który jest
   * w referencji dzięki refContainer
   */
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">submit</button>
        </div>
        <div ref={divContainer}>Hello WORLD!</div>
      </form>
    </>
  );
};

export default UseRefBasics;
