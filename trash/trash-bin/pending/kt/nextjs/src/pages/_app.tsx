import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { ContextProvider } from '../contexts/ContextProvider';
import { AppBar } from '../components/AppBar';
import { ContentContainer } from '../components/ContentContainer';
import { Footer } from '../components/Footer';
import { Layout } from '../components/layout';
import Notifications from '../components/Notification'
require('@solana/wallet-adapter-react-ui/styles.css');
require('../../Jrzy/style.css');

const App: FC < AppProps > = ({ Component, pageProps }) => {
    return (
        <>
          <Head>
            <title>Solana Scaffold Lite</title>
          </Head>

          <ContextProvider>
          
            <Layout>
              <Notifications />
            
                <Component {...pageProps} />
             
            </Layout>
           
          </ContextProvider>
        </>
    );
};

export default App;

















          {/* Main */
                        //<ContextProvider>
              //<Footer/>

             // <Footer/>
              
              // <AppBar/>
              
                       // </ContextProvider>

          }



