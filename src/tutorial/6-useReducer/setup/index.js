import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { reducer } from "./reducer";
// reducer function



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

  /**
   * Przechwycenie Submit formularza
   * @param {*} event Zdarzenie
   */
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

  /**
   * Funkcja wysyłająca infomracje do useReducer o konieczności zamknięcia modelu popOut
   */
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
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
          <div key={person.id} className="item">
            <h4>{person.name} </h4>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payLoad: person.id })
              }
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
