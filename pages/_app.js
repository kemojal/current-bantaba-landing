import '../styles/globals.css';
import '../styles/variables.css';
import '../styles/mapAnimation.css';
// import 'animate.css/animate.min.css';
import { Provider } from 'react-redux';
import { store } from './../Store';

import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default appWithTranslation(MyApp);
