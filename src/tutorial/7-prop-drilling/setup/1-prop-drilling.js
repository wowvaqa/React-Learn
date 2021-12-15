import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

// Problem prop drillingu 'przekopywania się propsów' przez kolejne komponenty w drzewku
// komponentów. W poniższym przykładzie funkcja 'removePerson' której chcemy użyć w
// komponencie 'SinglePerson' musi zostać przekazana najpierw do komponentu 'List'. Po
// otrzymaniu funkji przez komonent 'List' funkcja 'removePerson' zostaje przekazana dalej
// do komponentu 'SinglePerson'

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <section>
      <h3>Porp drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button className="btn" onClick={() => removePerson(id)}>
        Usuń
      </button>
    </div>
  );
};

export default PropDrilling;
