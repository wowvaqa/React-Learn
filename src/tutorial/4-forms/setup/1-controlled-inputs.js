import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

/**
 * Formularz 'form'. Domyślnie po naciśnięciu przycisku 'Submit' przeglądarka odświeża strone
 * funkcja event.preventDefault() zapobiega domyślnemu dzialaniu przeglądarki - strona nie
 * zostanie odświeżona.
 * Funkcje 'submit' można realizować z poziomu formy i zdarzenia 'onSubmit' lub z posiozmu
 * przycisku i zdarzenia 'onClick'
 * @returns
 */

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName) {
      const person = {
        id: new Date().getTime().toString(),
        firstName,
        lastName,
        email,
      };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      console.log(person);
    } else {
      console.log("Uzupełnij imię i nazwisko baranie");
    }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Imię: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="lastName">Nazwisko: </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <button className="button" type="submit">
            Dodaj Osobę
          </button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, lastName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>
                {firstName} {lastName}
              </h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
