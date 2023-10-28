let input = document.querySelector('input');
let left_btn = document.querySelector('#left_sidebar_opener-container1');
let right_btn = document.querySelector('#right_sidebar_opener-container1');
let ion_icons = document.querySelectorAll('ion-icon');

let ion_cross_icon = document.querySelectorAll('ion-icon[name=close-outline]')
let original_attr;

const close_toggler = document.querySelectorAll('.close-toggler');
let ripples = document.querySelectorAll('.ripples');

// ripples.forEach(op=>{
//     op.addEventListener('click',(e)=>{
//         // let x,y;
//         // x = e.clientX - e.target.offsetLeft;
//         // y = e.clientY - e.target.offsetTop;
//         //  x = e.clientX;
//         //  y = e.clientY;
//         // x = e.target.offsetLeft;
//         // y = e.target.offsetTop;
       
//     //   console.log(e.target.clientX);
//     //   console.log(e.offsetTop);
//     //   console.log(e.clientX);
//     //   x = e.clientX;
//     //   y = e.clientY;
//     //   x = e.pageX;
//     //   y = e.pageY;
       
//     //   console.log(x,y);
       
//     //   if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
//     //     let touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
//     //         x = touch.pageX;
//     //         y = touch.pageY;
//     //         console.log('op1');
            
            
//         // }else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
//         //     x = e.clientX;
//         //     y = e.clientY;
            
//         //     console.log('op2');
//         // }
//         // x = e.clientX - e.target.offsetLeft;
//         // y = e.clientY - e.target.offsetTop;
//         let x = e.clientX - e.target.offsetLeft;
//         let y = e.clientY - e.target.offsetTop;
        
        
//         let ripple = document.createElement('span');
//         ripple.classList.add('sprincles');
        
//         ripple.style.left = `${x}px`;
//         ripple.style.top = `${y}px`;
        
//         console.log(x,y);
//         // console.log(ripple.style.left);
//         // console.log(ripple.style.top);
        
//         // console.log(x,y);
//         // op.appendChild(ripple);
        
        
//         setTimeout(()=>{
//             // ripple.remove();
//             console.log('op');
//         },1000);
//     })
// })
         ripples.forEach((button) => {
           button.onclick = function(e){
             let x = e.clientX - e.target.offsetLeft;
             let y = e.clientY - e.target.offsetTop;
             
             
             let ripple = document.createElement("span");
                ripple.classList.add('sprincles');
     
             ripple.style.left = `${x}px`;
             ripple.style.top = `${y}px`;
             
             this.appendChild(ripple);
             setTimeout(function(){
               ripple.remove();
             }, 1000); // 1second = 1000ms
           }
         });




close_toggler.forEach(op=>{
    op.addEventListener('click',()=>{
        
        op.classList.toggle('active');
        console.log('closo icon');
        
    })
})

// ion_cross_icon.forEach(op=>{
//     op.addEventListener('click',()=>{
//         console.log('closo icon');
//     })
// })




// ion_icons.forEach(cross => {
    
//     let op = cross.getAttribute(name);
//     cross.addEventListener('click', ()=>{
        
//         original_attr = cross.getAttribute('name');
//         // console.log(op);
//         // console.log(original_attr);
//         if (cross.getAttribute('name')=='close-outline') {
//             console.log('d8tdti');
//             cross.setAttribute('name',`${original_attr}`);
//             console.log(original_attr);
        
//         }
        
//         cross.setAttribute('name','close-outline');
        
//     })
// })




















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
let result;
if (text.includes ('Hello')) {
    result = text.replace(/class/g,'Mello Mello')
}

console.log(result);
                                                                                                                                                                
