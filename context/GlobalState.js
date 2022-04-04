import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  currentLanguage: 'en',
  showModal: false,
  showContactUsModal: true,
  showContactModal: false,
  subscribeNewsletterModal: false,
  showJoinNewsLetterModal: false,
  showBlogDetail: false,
  currentDetail: {},
  currentActiveTab: 'home',
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
  function toggleSubscribeNewsletterModal(condition) {
    dispatch({
      type: 'TOGGLE_SUBSCRIBE_NEWSLETTER_MODAL',
      payload: condition,
    });
  }

  function toggleJoinNewsLetterModal(condition) {
    dispatch({
      type: 'TOGGLE_JOIN_NEWSLETTER_MODAL',
      payload: condition,
    });
  }
  function setCurrentLanguage(lang) {
    dispatch({
      type: 'SET_LANGUAGE',
      payload: lang,
    });
  }
  function showBlogDetailFunction(condition) {
    dispatch({
      type: 'SHOW_DETAILS',
      payload: condition,
    });
  }
  function setBlogDetailFunction(condition) {
    dispatch({
      type: 'SET_DETAILS',
      payload: condition,
    });
  }
  function setTab(condition) {
    dispatch({
      type: 'SET_TAB',
      payload: condition,
    });
  }
  // function setFrFAQ(condition) {
  //   dispatch({
  //     type: 'SET_FRFAQS',
  //     payload: condition,
  //   });
  // }

  return (
    <GlobalContext.Provider
      value={{
        currentLanguage: state.currentLanguage,
        showModal: state.showModal,
        showContactModal: state.showContactModal,
        showJoinNewsLetterModal: state.showJoinNewsLetterModal,
        showBlogDetail: state.showBlogDetail,
        currentDetail: state.currentDetail,
        showContactUsModal: state.showContactUsModal,
        subscribeNewsletterModal: state.subscribeNewsletterModal,
        currentActiveTab: state.currentActiveTab,
        showNewsLetterModal,
        toggleContactModal,
        closeNewsLetterModal,
        setCurrentLanguage,
        showBlogDetailFunction,
        setBlogDetailFunction,
        toggleSubscribeNewsletterModal,
        setTab,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
