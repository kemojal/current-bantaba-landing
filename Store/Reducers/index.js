const initialState = {
  currentLanguage: 'en',
  isNewsLetterModal: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state, currentLanguage: action.payload };
    case 'TOGGLE_NEWSLETTER_MODAL':
      return { ...state, isNewsLetterModal: action.payload };
    default:
      return state;
  }
}
