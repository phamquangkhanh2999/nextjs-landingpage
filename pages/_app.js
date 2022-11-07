import '../styles/globals.css';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { light } from '../components/theme/index';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const StyledThemeProvider = (props) => {
    const resolvedTheme = light;
    return <ThemeProvider theme={resolvedTheme} {...props} />;
  };
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <React.Fragment>
        <Head>
          <link rel='shortcut icon' href='/favicon.png' />
          <title>Dpotech</title>
        </Head>
        <StyledThemeProvider>
          <Component {...pageProps} />
        </StyledThemeProvider>
      </React.Fragment>
    );
  }
}

export default MyApp;
