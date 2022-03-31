import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  showModal: false,
  showContactModal: false,
  showJoinNewsLetterModal: false,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  function showNewsLetterModal(condition) {
    dispatch({
      type: 'SHOW_MODAL',
      payload: condition,
    });
  }

  function closeNewsLetterModal(condition) {
    dispatch({
      type: 'CLOSE_MODAL',
      payload: condition,
    });
  }
  function toggleContactModal(condition) {
    dispatch({
      type: 'TOGGLE_CONTACT_MODAL',
      payload: condition,
    });
  }
  function toggleJoinNewsLetterModal(condition) {
    dispatch({
      type: 'TOGGLE_JOIN_NEWSLETTER_MODAL',
      payload: condition,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        showModal: state.showModal,
        showContactModal: state.showContactModal,
        showJoinNewsLetterModal: state.showJoinNewsLetterModal,
        showNewsLetterModal,
        closeNewsLetterModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
