import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const [lateValue, setLateValue] = useState(0);

  const increase = () => {
    setValue(value - 1);
  };

  const decrease = () => {
    setValue(value + 1);
  };

  /**
   * setTimeout przyjmuje 2 argumenty = funkcje callback, oraz czas opóźnienia w ms
   * funkcję zmieniającą wartość zmiennej może przyjąć zamiast wartości funkcję
   * 'prevState' nazwa wg przyjętej konwencji nazewnictwa oznacza, że funkcja
   * strzałkowa przyjmuje swoją poprzednią wartość. Na początku jest to 0, pózniej
   * 1,2 itd. Dzięki takiemu podejściu program zapamięta ilość kliknięć w przycisk
   * W standardowym podejściu (bez użycia funkcji strzałkowej) nadpisana zostanie
   * wartość początkowa. Podejście funkcyjne narzuca konieczność stosowania operatora
   * 'return' który musi zwracać zmienną zrozumialą przez funkcję odbierającą.
   * Bez 'return' zwróci obiekty typu 'undefined' i skończy się to wyrzuceniem
   * komunikatu o błędzie
   */
  const complexIncrease = () => {
    setTimeout(() => {
      setLateValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h3>Zwykły przeliczacz</h3>
        <h1>{value}</h1>
        <button className="btn" onClick={increase}>
          -
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          reset
        </button>
        <button className="btn" onClick={decrease}>
          +
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h3>Bardziej zaawansowany przeliczacz</h3>
        <h1>{lateValue}</h1>
        <button className="btn" onClick={complexIncrease}>
          Zwiększ później (2s i guess)
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
