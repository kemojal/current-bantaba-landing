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
    case 'TOGGLE_SUBSCRIBE_NEWSLETTER_MODAL':
      return {
        ...state,
        subscribeNewsletterModal: action.payload,
      };
    case 'TOGGLE_JOIN_NEWSLETTER_MODAL':
      return {
        ...state,
        showJoinNewsLetterModal: action.payload,
      };
    case 'SET_LANGUAGE':
      return { ...state, currentLanguage: action.payload };
    case 'SHOW_DETAILS':
      return { ...state, showBlogDetail: action.payload };
    case 'SET_DETAILS':
      return { ...state, currentDetail: action.payload };
    case 'SET_TAB':
      return { ...state, currentActiveTab: action.payload };
    case `SET_IS_PAGE_ROUTING`:
      return { ...state, isPageRouting: action.payload };
    default:
      return state;
  }
};
