const initialState = {
  currentLanguage: 'en',
};
export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state, currentLanguage: action.payload };
    default:
      return state;
  }
}
