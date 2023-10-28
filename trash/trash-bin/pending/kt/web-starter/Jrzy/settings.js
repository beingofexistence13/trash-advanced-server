let settings_toggler=document.querySelector('.psd-toggler');
let settings_container=document.querySelector('.p-s-d');


settings_toggler.addEventListener('click',()=>{
    
    console.log('Settings-touch');
    settings_container.classList.toggle('show-flex');
    
    
})


