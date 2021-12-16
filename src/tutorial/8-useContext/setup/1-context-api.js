import React, { useState, useContext } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

/**
 * Hook useContext tworzy kontekst na elemencie, umożliwia przesyłanie danych (zmiennych,
 * funkcji) do zagnieżdzonych komponentów. Rozwiązuje problem 'prop drillingu'
 */

/**
 * Utworzenie contekstu, nazwa dowolna
 */
const PersonContext = React.createContext();
// two components - provider, consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  // Utowrzenie Providera kontekstu przechowującego w swojej wartości 'value' funkcje
  // 'removePerson'
  return (
    <PersonContext.Provider value={{ removePerson }}>
      <h3>prop drilling case solved by useContext</h3>
      <List people={people} />
    </PersonContext.Provider>
  );
};

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  // użycie kontekstu aplikacji. Kontekst dostarcza przechowywany obiekt w
  // tym przyadku funkcje 'removePerson'
  const { removePerson } = useContext(PersonContext);
  console.log(data);
  return (    
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
