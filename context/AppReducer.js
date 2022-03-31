export default (state, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        ...state,
        showModal: true,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        showModal: false,
      };
    case 'TOGGLE_CONTACT_MODAL':
      return {
        ...state,
        showContactModal: action.payload,
      };
    case 'TOGGLE_JOIN_NEWSLETTER_MODAL':
      return {
        ...state,
        showJoinNewsLetterModal: action.payload,
      };
    case 'SET_LANGUAGE':
      return { ...state, currentLanguage: action.payload };
    default:
      return state;
  }
};
