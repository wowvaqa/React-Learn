import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  // const [age, setAge] = useState("");
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (event) => {
    // Zmienne pobierające wartości z zadarzenia niezbędne by rozpoznać w którym polu tekstowym
    // użytkownik wpisywał dane
    const name = event.target.name;
    const value = event.target.value;
    // Dynamicze uaktualnienie wartości właściwości skopiowanego (...person) obiektu 'person'
    // React automatycznie podpina odpowiednią wartość do zmiennej obiektu 'person'
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime.toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", age: "" });
    }
  };

  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="text"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
