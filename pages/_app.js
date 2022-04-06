import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import '../styles/variables.css';
import '../styles/mapAnimation.css';
// import 'animate.css/animate.min.css';
import { Provider } from 'react-redux';
import { store } from './../Store';

import { appWithTranslation } from 'next-i18next';

// import { GlobalProvider } from './context/GlobalState';
import { GlobalProvider, GlobalContext } from '../context/GlobalState';

import ProgressBar from '../components/ProgressBar';

//page progessbar
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css';

function MyApp({ Component, pageProps }) {
  const { isPageRouting, setIsPageRouting } = useContext(GlobalContext);

  // const setIsAnimating = isPageRouting
  const pagerouter = useRouter();

  useEffect(() => {
    const handleStart = () => {
      // setIsPageRouting(true);
    };
    const handleStop = () => {
      // setIsPageRouting(false);
    };
    pagerouter.events.on('routeChangeStart', () => NProgress.start());
    pagerouter.events.on('routeChangeComplete', () => NProgress.done());
    pagerouter.events.on('routeChangeError', () => NProgress.done());
    // pagerouter.events.on('routeChangeStart', handleStart);
    // pagerouter.events.on('routeChangeComplete', handleStop);
    // pagerouter.events.on('routeChangeError', handleStop);

    return () => {
      // pagerouter.events?.of('routeChangeStart', () => NProgress.start());
      // pagerouter.events?.of('routeChangeComplete', () => NProgress.done());
      // pagerouter.events?.of('routeChangeError', () => NProgress.done());
      // pagerouter?.events.of('routeChangeStart', handleStart);
      // pagerouter?.events.of('routeChangeComplete', handleStop);
      // pagerouter?.events.of('routeChangeError', handleStop);
    };
  }, [pagerouter]);

  return (
    // <Provider store={store}>
    <>
      {/* <ProgressBar isPageRouting={isPageRouting} /> */}
      <GlobalProvider>
        <Component {...pageProps} />;
      </GlobalProvider>
    </>
    // </Provider>
  );
}

export default appWithTranslation(MyApp);
