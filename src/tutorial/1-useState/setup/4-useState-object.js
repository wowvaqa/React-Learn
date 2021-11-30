import React, { useState } from "react";

const UseStateObject = () => {
  const [animal, setAnimal] = useState({
    name: "dog",
    age: "2",
    sound: "wuf!",
  });

  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "random message",
  });

  const [name, setName] = useState("Peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("random message");

  /**
   * Jeżeli nie użyjemy w funkcji '...person' i nie rozbijemy obiektu na jego pola
   * wtedy przy próbie zmiany wartości zmiennej message pozostałe wartości pól obiektu
   * tj. 'name' oraz 'age' zostaną wykasowane
   */
  const changeMessage = () => {
    setMessage("msg from const");
    setName("Lukas");
    setAge(38);
  };

  const showAnimal = () => {
    setAnimal({ ...animal, sound: "Sound of animal" });
    if (animal.sound === "Sound of animal") {
      setAnimal({ ...animal, sound: "wuf!" });
    }
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        Zmień wiadomość
      </button>
      <br></br>
      <h3>{animal.name}</h3>
      <h3>{animal.age}</h3>
      <h3>{animal.sound}</h3>
      <button className="btn" onClick={showAnimal}>
        Pokaż zwierzę
      </button>
    </>
  );
};

export default UseStateObject;
