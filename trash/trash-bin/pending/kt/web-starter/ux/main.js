
const main = ()=>{
    let body = document.querySelector('body');
    let main = document.querySelector('main');
    let menu_ic = document.querySelector('#pnt-it1');
    let small_sidebar = document.querySelector('#small-sidebar');
    let light = document.querySelector('#pnt-it5');
    let login_toggler = document.querySelector('#login-toggler');
    let login_container = document.querySelector('#login_wrapper');
    let overlay = document.querySelector('.overlay');
    let st1 = document.querySelector('.st1');
    let st2 = document.querySelector('.st2');
    let st3 = document.querySelector('.st3');
    let st4 = document.querySelector('.st4');
    let st5 = document.querySelector('.st5');
    let st6 = document.querySelector('.st6');
    
    let st = document.querySelectorAll('.st');
    let st_tg1 = document.querySelector('#st-m1');
    let st_tg2 = document.querySelector('#st-m2');
    let st_tg3 = document.querySelector('#st-m3');
    let st_tg4 = document.querySelector('#st-m4');
    let st_tg5 = document.querySelector('#st-m5');
    let st_tg6 = document.querySelector('#st-m6');
    let notification_container = document.querySelector('.notifications-container');
    let notification_toggler = document.querySelector('.notifications-toggler');
    
    
    
    const small_sidebar_tg = document.querySelector('.pro_navbar_top_div_left');
    
    
    
    
    
    
    
    
    st_tg1.addEventListener('click', (e) => {
        // console.log("oppppppp1")
        st1.classList.toggle('active1o1');
    
    })
    st_tg2.addEventListener('click', (e) => {
        // console.log("oppppppp2")
        st2.classList.toggle('active1o1');
    
    })
    st_tg3.addEventListener('click', (e) => {
        // console.log("oppppppp3")
        st3.classList.toggle('active1o1');
    
    })
    st_tg4.addEventListener('click', (e) => {
        // console.log("oppppppp1")
        st4.classList.toggle('active1o1');
    
    })
    st_tg5.addEventListener('click', (e) => {
        // console.log("oppppppp2")
        st5.classList.toggle('active1o1');
    
    })
    st_tg6.addEventListener('click', (e) => {
        // console.log("oppppppp3")
        st6.classList.toggle('active1o1');
    
    })


    return console.log('Mainjs file imported')
}




let text = 'Import worked';
export{ text,main };
