// src/redux/peopleSlice.js

const initialState = {
    people: [],
  };
  
  const ADD_PERSON = 'ADD_PERSON';
  const REMOVE_PERSON = 'REMOVE_PERSON';
  
  export const addPerson = (person) => ({
    type: ADD_PERSON,
    payload: person,
  });
  
  export const removePerson = (id) => ({
    type: REMOVE_PERSON,
    payload: id,
  });
  
  export const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PERSON:
        return {
          ...state,
          people: [...state.people, action.payload],
        };
      case REMOVE_PERSON:
        return {
          ...state,
          people: state.people.filter((p) => p.id !== action.payload),
        };
      default:
        return state;
    }
  };
  