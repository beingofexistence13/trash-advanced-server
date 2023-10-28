let input = document.querySelector('input');
let left_btn = document.querySelector('#left_sidebar_opener-container1');
let right_btn = document.querySelector('#right_sidebar_opener-container1');
let ion_icons = document.querySelectorAll('ion-icon');

let ion_cross_icon = document.querySelectorAll('ion-icon[name=close-outline]')
let original_attr;

const close_toggler = document.querySelectorAll('.close-toggler');
// let ripples = document.querySelectorAll('.ripples');
console.log('Hello JavaScript');
let ripples = document.querySelectorAll('.ripple');
let r = document.querySelector(':root');


ripples.forEach((ripples)=>{
    ripples.onclick = function(e){
        e.preventDefault(); // preventing form submitting
        
        // console.log('op');
        let ripple_height = ripples.clientHeight;
        let ripple_width = ripples.clientWidth;
        
        let ripple_total_height = ripple_height * 3;
        let ripple_total_width = ripple_width * 3;
        // console.log(ripple_width);
        // console.log(ripple_height);
        
        
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        
        
        let ripple = document.createElement("span");
        ripple.classList.toggle('ripples');
        r.style.setProperty('--ripple-height',`${ripple_total_height}px`);
        r.style.setProperty('--ripple-width',`${ripple_total_width}px`);
        // r.style.setProperty('--ripple-top',`${y}px`);
        // r.style.setProperty('--ripple-left',`${x}px`);
        
        // ripple.style.left = `${x}px`;
        // ripple.style.top = `${y}px`;
        
        // ripples.classList.toggle('hi')
        // console.log(ripple);
        // ripples.classList.add('Gotha');
        // let result = this.appendChild(ripple);
        // ripples.classList.toggle('ripples')
        this.appendChild(ripple);
        // console.log(ripples);
        // console.log(result);
        // console.log('hi');        
        setTimeout(function() {
            
            ripple.remove();
            
            
            
        }, 1000);
        
    }
    
})


switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday y8dgkxkgch ";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day);


let text5;
switch (new Date().getDay()) {
  case 6:
    text5 = "oh Today is Saturday";
    break;
  case 0:
    text5 = "oh Today is Sunday";
    break;
  default:
    text5 = "Looking forward to the Weekend";
}


console.log(text5);

switch (new Date().getDay()) {
  case 6:
    text5 = "oh Today is Saturday";
    break;
  case 0:
    text5 = "oh Today is Sunday";
    break;
  default:
    text5 = "Looking forward to the Weekend";
}

// close_toggler.forEach(op=>{
//     op.addEventListener('click',()=>{
        
//         op.classList.toggle('active');
//         console.log('closo icon');
        
//     })
// })














        let body = document.querySelector('body');




const mb_navbartop2_toolbar1 = document.querySelectorAll('.mntt1-icon-containers')
const mb_navbartop2_toolbar2 = document.querySelectorAll('.mntt2-icon-containers')

mb_navbartop2_toolbar1.forEach((icons)=>{
    
    icons.onclick=function icon_clicked_top_nav(e) {
        // console.log(icons);
        // console.log('op');
        // if (body) {
        //     console.log('hi');
        // }
        // if (icons.classList.contains('ion-icon')) {
        //     console.log('yes');
        // }
        
        
        body.classList.toggle('mb_navbartop2_toolbar');
        
    }
})
mb_navbartop2_toolbar2.forEach((icons)=>{
    
    icons.onclick=function icon_clicked_top_nav(e) {
        // console.log(icons);
        // console.log('op');
        // if (body) {
        //     console.log('hi');
        // }
        // if (icons.classList.contains('ion-icon')) {
        //     console.log('yes');
        // }
        
        
        body.classList.toggle('mb_navbartop2_toolbar');
    }
})

left_btn.addEventListener('click',()=>{
    console.log('Left button clicked');
})
right_btn.addEventListener('click',()=>{
    console.log('Right button clicked');
})



































function inputdata() {
    let texts=input.value;
    console.log(texts);

}

// inputdata();

let text = 'class="Hello bro"';
let result1,result2;
    
    result1 = text.replace(/class=/g,'Mello Mello');
    result2 = result1.replace(/Hello/g,'Hi What up');
    
    // result = text.replace(/Hello/g,'hi what up')

// if (text.includes ('Hello')) {
    
// }

console.log(result2);








// Open Instagram
// const url = "intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end";
// const url = "intent://clickup.com/#Intent;scheme=https;package=com.clickup.android;end";

// window.location.replace(url); 































let yt_container,hello_container,search_container,sidebars_container;

    yt_container=document.querySelector('#youtube_ai_nav-container')
    hello_container=document.querySelector('#hello-mode-container')
    search_container=document.querySelector('#search-container')
    sidebars_container=document.querySelector('#pro_sidebar_left-container')

let mntt1_1=document.querySelector('#mntt1_1'),
    mntt1_2=document.querySelector('#mntt1_2'),
    mntt1_3=document.querySelector('#mntt1_3'),
    mntt1_4=document.querySelector('#mntt1_4'),
    mntt2_1=document.querySelector('#mntt2_1'),
    mntt2_2=document.querySelector('#mntt2_2'),
    mntt2_3=document.querySelector('#mntt2_3'),
    mntt2_4=document.querySelector('#mntt2_4')


mntt2_4.addEventListener('click', (e)=>{
    
    body.classList.toggle('show')
    // yt_container.classList.toggle('hide');
    // search_container.classList.toggle('show');
    // yt_container.remove();
    // search_container.style.display='flex';
    
})



                                                                                                                                                                
