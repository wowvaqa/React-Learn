import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

/**
 * Funkcja reducer która jest parametrem 'useReducer' przyjmuje dwa argumenty:
 * 'state' który jest poczatkowym stanem, orac 'action' który jest akcją
 * Funkcja 'reducer' musi coś zwrócć
 */

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payLoad];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item added",
    };
  }
  if (action.type === "NO_VALUE") {
    return { ...state, isModalOpen: true, modalContent: "Proszę wpisz imię" };
  }
  throw new Error("No matching action (dispatch) type");
};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  // Przy użyci 'useReducer' domyślna konwencja nazewnictwa to: [state, dispach]
  // state - początkowy stan; dispatch - wysyłka danych, akcja
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payLoad: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <button type="submit">Add Person</button>
        </div>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name} </h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
