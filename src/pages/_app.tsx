import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import Link from 'next/link';
import { ContextProvider } from '../contexts/ContextProvider';
import { AppBar } from '../components/AppBar';
import { ContentContainer } from '../components/ContentContainer';
import { Footer } from '../components/Footer';
import Notifications from '../components/Notification'

require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');




const App: FC<AppProps> = ({ Component, pageProps }) => {

    const title=`Picker's Pick`

    return (
        <>
          <Head>
            <title>{title}</title>
          </Head>

          <ContextProvider>
            <div className="flex flex-col h-screen">
              <Notifications />
              <AppBar/>
              <ContentContainer>
                <Component {...pageProps} />
                {/* <Footer/> */}
              </ContentContainer>
            </div>
          </ContextProvider>
        </>
    );
};

export default App;
