import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  /**
   * Usuwa podane id z tablicy danych.
   * @param {} id
   */
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Usuń</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Usuń wszystko
      </button>
    </>
  );
};

export default UseStateArray;
