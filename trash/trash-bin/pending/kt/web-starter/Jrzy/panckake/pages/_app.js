import '../flag-network/pancake/style.css'
import { MoralisProvider } from "react-moralis";
import Layout from '../components/layout'







export default function MyApp({ Component, pageProps }) {
    return (
        
        <MoralisProvider serverUrl="https://a2pko6dyqtwq.usemoralis.com:2053/server" appId="D0r1DA19TTZvr6CiWdB3sjDDE0Y71EFasRNLP12a">
            <Layout>
                <Component {...pageProps} />
           </Layout>
           
           
           
        </MoralisProvider>
           
        
    )
}




