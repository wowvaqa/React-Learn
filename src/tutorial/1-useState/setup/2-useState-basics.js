import React, { useState } from "react";

/**
 * Funkcja useState służy do obsługi renderowania widoku kiedy chcemy podmienić
 * wartość zmiennej. Nowa wartość zmiennej po nadpisaniu nie zostanie wyrenderowana
 * na widoku DOM
 * Funkcja useState przyjmuje 2 argumenty, pierwszy argument jest to zmienna, drugi
 * argument jest nazwą funkji która zmieni wartość zmiennej z pierwszego argumentu.
 * Konwencja nazwy jest taka, że pierwszy argument to nazwa zmiennej np. 'hello' a
 * nazwa drugiego argumentu (funkcji) to: setNazwaZmiennej czyli dla zmiennej 'hello'
 * setHello
 *
 */

const UseStateBasics = () => {
  const [text, setText] = useState("random title");

  const handleClick = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Zmień tytuł
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
