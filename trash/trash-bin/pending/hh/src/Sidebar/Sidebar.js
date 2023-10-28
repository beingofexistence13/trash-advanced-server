import Link from 'next/link'
import Script from 'next/script'
import Head from 'next/head'



// opbro🎉🎉🎉🎉😎😎😎😎
export const Sidebar = () => {
  
  
  if (typeof window !== "undefined") {
  // Client-side-only code
    console.log("h");
}
  
  
    
  return (
    <>

  <div id="small-sidebar" className="close shadow-sm ">
    <ul id="ss-ul">
      {/* <li className="ss-create c">
                      
                      <ion-icon name="add-outline"></ion-icon>
                      <a href="#"> Create </a>
                      
                  </li> */}
      {/* <li className="ss-search-container c">
                      
                      
                      <ion-icon name="add-outline"></ion-icon>
                      <input type="search" name="ss-search" id="ss-search" placeholder="Search for joy">
                      <ion-icon name="add-outline"></ion-icon>
                      
                      
                  </li> */}
                  
                        <li className="ss-li" id="ss-li1">
                            <Link passHref href="/home">
                                
                                <ion-icon name="home-outline"></ion-icon>
                                
                            </Link>                            
                            
                            
                            <Link passHref href="/home">
                                
                                <a href="#">Home</a>
                                
                            </Link>                            
                            
                        </li>
                        <li className="ss-li" id="ss-li1">
                        
                            <Link passHref href="/arena">
                        
                                <ion-icon name="baseball-outline"></ion-icon>       

                            </Link>    
                            
                            <Link passHref href="/arena">
                        
                                <a href="#">Arena</a>
                                
                            </Link>                            
                            
                        </li>
                        <li className="ss-li" id="ss-li1">
                        
                            <Link passHref href="/marketplace">
                        
                            
                                <ion-icon name="pricetag-outline"></ion-icon> 
                            </Link>                            
                            
                            
                            
                            <Link passHref href="/marketplace">
                                
                                <a href="#">Marketplace</a>
                                
                            </Link>                            
                            
                        </li>
                        <li className="ss-li" id="ss-li1">
                            
                                                        <Link passHref href="/dragon_language">

                            <ion-icon name="language-outline"></ion-icon>
                            
                                                        </Link>                            

                            
                            <Link passHref href="/dragon_language">
                                
                                <a href="#">Dragon Language</a>
                                
                            </Link>                            
                            
                        </li>
                        
                        <li className="ss-li" id="ss-li2">
                            
                            
                                                        <Link passHref href="/exchange">

                            
                                
                                <ion-icon name="cash-outline"></ion-icon>
                                                            </Link>                        



                                
                            <Link passHref href="/exchange">
                                
                                <a href="#">Exchange</a>                               
                            </Link>                        
 
                        </li>
                        <li className="ss-li" id="ss-li2">
                            
                                                        <Link passHref href="/nft">

                            
                                <ion-icon name="diamond-outline"></ion-icon>
                                
                                
                                                            </Link>                            

                            
                            <Link passHref href="/nft">
                            
                                <a href="#">Nft</a>
                                
                                
                            </Link>                            
                            
                            
                        </li>
                        <li className="ss-li" id="ss-li2">
                            
                            
                                                        <Link passHref href="/stack">

                                <ion-icon name="analytics-outline"></ion-icon>
                            
                            
                                                        </Link>                            

                            <Link passHref href="/stack">
                                <a href="#">Stack</a>
                                
                                
                            </Link>                            
                            
                            
                            
                        </li>
                        <li className="ss-li" id="ss-li2">
                            
                                                        <Link passHref href="/airdrop">

                            
                                <ion-icon name="egg-outline"></ion-icon>
                                                        </Link>                            

                            <Link passHref href="/airdrop">
                                
                            
                                <a href="#">Airdrop</a>
                                
                            </Link>                            
                            
                            </li>
                        <li className="ss-li" id="ss-li3">
                            
                                                        <Link passHref href="/ido_event">

                            
                                <ion-icon name="medal-outline"></ion-icon>
                                                        </Link>                            

                            <Link passHref href="/ido_event">
                                
                                
                            
                                <a href="#">Ido-Event</a>
                            
                            </Link>                            
                            
                        </li>
                        <li className="ss-li" id="ss-li4">
                        
                        
                                                    <Link passHref href="/ido">

                        
                            <ion-icon name="ribbon-outline"></ion-icon>
                            </Link>                            

                            <Link passHref href="/ido">

                            
                            <a href="#">Ido</a>
                            </Link>                            
                            
                        </li>
                        <li className="ss-li" id="ss-li5">
                            
                            
                            
                                                        <Link passHref href="/gamefi">

                                <ion-icon name="game-controller-outline"></ion-icon>
                                                        </Link>                            

                            <Link passHref href="/gamefi">
                                
                            
                                
                                <a href="#">GameFi</a>
                                
                            </Link>                            
                            </li>
                        <li className="ss-li" id="ss-li7">
                            
                                                        <Link passHref href="/support_ukrane">

                                <ion-icon name="sparkles-outline"></ion-icon>
                                                        </Link>                            

                            
                            <Link passHref href="/support_ukrane">
                                
                            
                                <a href="#">Support Ukraine</a>
                                
                            </Link>                            
                            
                            
                        </li>
      {/* <li className="line"></li> */}
      <div className="strat-line">
        <li className="st st1">
          <div className="st-main" id="st-m1">
            <ion-icon name="list-outline" />
            <a href="#">More</a>
            <ion-icon name="chevron-forward-outline" />
          </div>
          <div className="st-toggle">
            <a href="#">Twitter</a>
            <a href="#">Discord</a>
            <a href="#">Facebook</a>
            <a href="#">Telegram</a>
          </div>
        </li>
        <li className="st st2">
          <div className="st-main" id="st-m2">
            <ion-icon name="heart-outline" />
            <a href="#">Favorite</a>
            <ion-icon name="chevron-forward-outline" />
          </div>
          <div className="st-toggle">
            <a href="#">Exchange</a>
            <a href="#">Nft</a>
            <a href="#">Airdrop</a>
            <a href="#">Gamefi</a>
          </div>
        </li>
        <li className="st st3">
          <div className="st-main" id="st-m3">
            <ion-icon name="book-outline" />
            <a href="#">Docs</a>
            <ion-icon name="chevron-forward-outline" />
          </div>
          <div className="st-toggle">
            <a href="#">All</a>
            <a href="#">Assigned to me</a>
            <a href="#">Shared with me</a>
            <a href="#">Private</a>
          </div>
        </li>
        <li className="st st4">
          <div className="st-main" id="st-m4">
            <ion-icon name="bar-chart-outline" />
            {/* <ion-icon name="list-outline"></ion-icon> */}
            <a href="#">Analysis</a>
            <ion-icon name="chevron-forward-outline" />
          </div>
          <div className="st-toggle">
            <a href="#">Twitter</a>
            <a href="#">Discord</a>
            <a href="#">Facebook</a>
            <a href="#">Telegram</a>
          </div>
        </li>
        <li className="st st5">
          <div className="st-main" id="st-m5">
            <ion-icon name="cloud-upload-outline" />
            {/* <ion-icon name="heart-outline"></ion-icon> */}
            <a href="#">Uploads</a>
            <ion-icon name="chevron-forward-outline" />
          </div>
          <div className="st-toggle">
            <a href="#">Exchange</a>
            <a href="#">Nft</a>
            <a href="#">Airdrop</a>
            <a href="#">Gamefi</a>
          </div>
        </li>
        <li className="st st6">
          <div className="st-main" id="st-m6">
            <ion-icon name="library-outline" />
            {/* <ion-icon name="bar-chart-outline"></ion-icon> */}
            {/* <ion-icon name="book-outline"></ion-icon> */}
            <a href="#">Library</a>
            <ion-icon name="chevron-forward-outline" />
          </div>
          <div className="st-toggle">
            <a href="#">All</a>
            <a href="#">Assigned to me</a>
            <a href="#">Shared with me</a>
            <a href="#">Private</a>
          </div>
        </li>
      </div>
    </ul>
  </div>
  
  
  
       
    <Head>
        
    </Head>
    </>
  );
};




export default Sidebar;