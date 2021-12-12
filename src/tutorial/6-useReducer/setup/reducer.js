/**
 * Funkcja reducer która jest parametrem 'useReducer' przyjmuje dwa argumenty:
 * 'state' który jest poczatkowym stanem, oraz 'action' który jest akcją
 * Funkcja 'reducer' musi coś zwrócić
 */

/**
 * Funkcja do obsługi Hooka reaktowego - 'useReducer'
 * @param {*} state Stan początkowy
 * @param {*} action Akcja
 * @returns
 */
export const reducer = (state, action) => {
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
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }
  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payLoad
    );
    return { ...state, people: newPeople };
  }
  throw new Error("No matching action (dispatch) type");
};
