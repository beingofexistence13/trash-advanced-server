
const d = (e)=> {
    return document.querySelector(e);
}
const da = (e)=> {
    return document.querySelectorAll(e);
}

let canvas = d('#canvas-container'),
    body = d('body'),
    ctx = canvas.getContext('2d');

// console.log(ctx);    



// canvas.addEventListener('click',()=>{
//     // console.log('op');
// })

// console.log(body.clientHeight);
// console.log(body.clientWidth);


// canvas.style.height = `${body.clientHeight}px`;
// canvas.style.width = `${body.clientWidth}px`;







// window.addEventListener('resize',()=>{
//     canvas.width=window.innerWidth;
//     canvas.height=window.innerHeight;
// })

// const draw_circle = (e)=>{
    
    
//     console.log(e);
   
    
    
    
//     ctx.fillStyle = 'white';
//     // ctx.fillRect(10,10,150,50);
//     ctx.strokeStyle='red';
//     ctx.lineWidth=20;
//     ctx.beginPath();
//     ctx.arc(50,50,50,0, Math.PI * 2);
//     ctx.stroke();
    
    
// }


// const mouse = {
//     x:null,
//     y:null
// }
// canvas.addEventListener('click',(e)=>{
    
    
//     // let x = e.clientX - e.offsetLeft;
//     // let y = e.clientY - e.offsetTop;
    
//     let x = e.clientX;
//     let y = e.clientY;
    
//     // mouse.x=e.x;
//     // mouse.y=e.y;
    
//     // ctx.fillStyle = 'white';
//     // ctx.strokeStyle='red';
//     // ctx.lineWidth=20;

//     // ctx.beginPath();
//     // ctx.arc(x,y,50,0, Math.PI * 2);
//     // ctx.fill();
    
//     // ctx.moveTo(0,0);
//     // ctx.lineTo(200,100);
//     // ctx.stroke();    
    
    
    
//     e.preventDefault();
    
// })
// draw_circle();
// console.log(ctx);


canvas.addEventListener('click',(e)=>{
    // console.log('opig');
    
    ctx.fillStyle = 'white';
        // ctx.strokeStyle='blue';
        // ctx.lineWidth=1;
    
    ctx.beginPath();
    ctx.arc(e.x,e.y,3,0,2*Math.PI);
    ctx.fill();    
    
    
    e.preventDefault();
    
})


console.log(ctx);
