import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import '../styles/variables.css';
import '../styles/mapAnimation.css';

import { appWithTranslation } from 'next-i18next';

import { GlobalProvider, GlobalContext } from '../context/GlobalState';

// import ProgressBar from '../components/ProgressBar';

//page progessbar
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css';

function MyApp({ Component, pageProps }) {
  const { isPageRouting, setIsPageRouting } = useContext(GlobalContext);
  const pagerouter = useRouter();

  useEffect(() => {
    const handleStart = () => {
      
    };
    const handleStop = () => {
      
    };
    pagerouter.events.on('routeChangeStart', () => NProgress.start());
    pagerouter.events.on('routeChangeComplete', () => NProgress.done());
    pagerouter.events.on('routeChangeError', () => NProgress.done());

    return () => {
      // pagerouter.events?.of('routeChangeStart', () => NProgress.start());
      // pagerouter.events?.of('routeChangeComplete', () => NProgress.done());
      // pagerouter.events?.of('routeChangeError', () => NProgress.done());
    };
  }, [pagerouter]);

  return (
    <GlobalProvider>
      <Component {...pageProps} />;
    </GlobalProvider>
  );
}

export default appWithTranslation(MyApp);
