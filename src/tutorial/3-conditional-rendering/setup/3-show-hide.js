import React, { useState, useEffect } from "react";

const ShowHide = () => {
  /**
   * Rozwinięcie ShortCircut. Jeżeli zmienna show jest ture (sprawdza operator &&) wtedy
   * wyświetlony zostaje komponent Item {show && <Item />}
   */
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => console.log(setShow(!show))}>
        Pokaż/Ukryj
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize");
    };
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>window</h1>
      <h2>size: {size} px</h2>
    </div>
  );
};

export default ShowHide;
