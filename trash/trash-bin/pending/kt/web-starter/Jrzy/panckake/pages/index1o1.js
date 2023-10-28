import Link from 'next/link'
import Script from 'next/script'
import Head from 'next/head'
import Image from 'next/image'









export default function Intro_page(){
  return (
    <>
        
        
          <nav id="pro_navbartop_container">
            <ul id="pnt-ul">
              <li className="pnt-li" id="pnt-li1">
                <div id="pnt-it1" className="pnt-it">
                  <ion-icon name="menu-outline" id="pnt-in" />
                  <ion-icon name="close-outline" id="pnt-in" />
                </div>
                <div id="small-sidebar" className="close">
                  <ul id="ss-ul">
                    <li className="ss-li" id="ss-li1">
                      <ion-icon name="menu-outline" className="ss-ic" />
                      <a href="#">item1</a>
                    </li>
                    <li className="ss-li" id="ss-li2">
                      <ion-icon name="menu-outline" className="ss-ic" />
                      <a href="#">item2</a>
                    </li>
                    <li className="ss-li" id="ss-li3">
                      <ion-icon name="menu-outline" className="ss-ic" />
                      <a href="#">item3</a>
                    </li>
                    <li className="ss-li" id="ss-li4">
                      <ion-icon name="menu-outline" className="ss-ic" />
                      <a href="#">item4</a>
                    </li>
                    <li className="ss-li" id="ss-li5">
                      <ion-icon name="menu-outline" className="ss-ic" />
                      <a href="#">item5</a>
                    </li>
                    <li className="ss-li" id="ss-li6">
                      <ion-icon name="menu-outline" className="ss-ic" />
                      <a href="#">item6</a>
                    </li>
                    <li className="ss-li" id="ss-li7">
                      <ion-icon name="menu-outline" className="ss-ic" />
                      <a href="#">item7</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="pnt-li" id="pnt-li2">
                <div id="pnt-it2" className="pnt-it">
                  <ion-icon name="logo-google" />
                </div>
                {/* <img srcset="../public/Google.png" src="../public/Google.png" alt="../public/Google.png"> */}
              </li>
              <li id="pnt_divider" />
              <li className="pnt-li" id="pnt-li4">
                <div id="pnt-it4" className="pnt-it">
                  <ion-icon name="search-outline" />
                </div>
              </li>
              <li className="pnt-li" id="pnt-li5">
                <div id="pnt-it5" className="pnt-it">
                  <ion-icon name="sunny-outline" />
                  {/* <ion-icon name="search-outline"></ion-icon> 
                          <div className="overlay"></div>

                  */}
                  <ion-icon name="moon-outline" />
                </div>
              </li>
              <li className="pnt-li" id="pnt-li6">
                <div className="btn btn-white" id="login-toggler">
                  connect
                </div>
                <div id="login_wrapper">
                  <div id="login_header">
                    <h5>Login to Flag-Network</h5>
                    {/* <ion-icon name="close-outline"></ion-icon> */}
                    {/* <ion-icon name="moon-outline"></ion-icon> */}
                  </div>
                  <div id="metamask_container" className="btn_login_metamask">
                    <Image src="/metamask.png" alt="Metamask" height={48} width={48} />
                    <div className="login-text">
                      Metamask
                    </div>
                  </div>
                  <div id="wallet-connect_container" className="btn_login_wallet-connect">
                    <Image src="/wallet-connect.svg" alt="Wallet-connect" height={48} width={48} />
                    <div className="login-text">
                      Wallet-connect
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          {/* <h1>Main</h1> */}
          <main>
            <h1 className="gradient-text">
              Hello from flag-network!
            </h1>
          </main>



      <Script
        type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        strategy="beforeInteractive"
      />

      <Script
        nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://unpkg.com/moralis/dist/moralis.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://github.com/WalletConnect/walletconnect-monorepo/releases/download/1.7.1/web3-provider.min.js"
        strategy="beforeInteractive"
      />

      <Script
        src="https://cdn.jsdelivr.net/gh/Harry1o1/Demo1o1/nextjs/flag-network/globals/main1o2.js"
        strategy="beforeInteractive"
      />




      <Head>
        <title>LetWorkBeDone</title>
        <meta name="description" content="Generated by create next app" />

        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
  
        <link rel="stylesheet" href="https://unpkg.com/open-props"/>
        <link rel="stylesheet" href="https://unpkg.com/open-props/normalize.min.css"/>

   
        <link href="https://cdn.jsdelivr.net/gh/Harry1o1/Demo1o1/nextjs/flag-network/globals/style1o2.css" rel="stylesheet" />

    
        
        
        

      </Head>

    </>
  );
};

