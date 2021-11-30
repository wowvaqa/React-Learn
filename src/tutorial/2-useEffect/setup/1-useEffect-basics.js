import React, { useState, useEffect } from "react";
// Domyślnie hook useEffect zostaje uruchomony za każdym razem po wyrenderowaniu elementu
// Hook useEffects może przyjmować drugi parametr - tablicę zależności
// tablica pust '[]' infromuje funkcję, że ta ma uruchomić callback tylko przy pierwszym
// wyrenderowaniu
// Funkcji useEffect można mieć unlimited
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  // Podanie w tablicy zmiennej value informuje, że jeżeli zmieni się jej wartość
  // zmiennej 'value' wtedy ma zostać wywołana funkcja useEffect
  useEffect(() => {
    console.log("render component");
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log("use Effect");
  }, []);

  const clickMe = () => {
    setValue(value + 1);
  };

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={clickMe}>
        Zwiększ o 1
      </button>
    </>
  );
};

export default UseEffectBasics;
