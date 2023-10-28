'use-strick'
// Imports
import { q, qa, CLICK } from '../website/ux/dom.js';
// Variables
const body = q('body');
const html = q('html');
let videoContainer = q('.video_player_container');
let thumbnail = q('.thumbnail');
let video = q('.video');
let videAllElement = qa('.video_player_container > *');
let timeDetailsLeft = q('.timeDetails_left');
let timeDetailsRight = q('.timeDetails_right');
let videoTimeLine = q('.video_timeLine');
let videoFollower = q('.timeLine_follower');
let video_control_button = q('.video_control');
let video_mute_button = q('.video_mute');
let video_sound_button = q('.video_sound');
let video_increase_button = q('.video_increase');
let video_decrease_button = q('.video_decrease');
const text = 'Hello Sir,I am Friday';

// Video Functions
const videoContainerTools = ()=> {
    console.log('video container is clicked');
    
}

let friday_test = () => {
    
    try {
        
        // const utterance = new SpeechSynthesisUtterance(text);
        // speechSynthesis.speak(utterance);
        
    }catch (e) {
        return console.log(e.message);
    }
    

}
const video_control = () => {
    
    thumbnail.style.display = 'none';
    video.paused ? video.play() : video.pause();
    video.paused ? video_control_button.classList.add('pause_mode') : video_control_button.classList.add('play_mode');
    video.paused ? video_control_button.classList.remove('play_mode') : video_control_button.classList.remove('pause_mode');
    if(video.paused){
        
        
        video_control_button.removeAttribute('name','pause')
        video_control_button.setAttribute('name','play')
        
    }else{
        
        video_control_button.removeAttribute('name','play')
        video_control_button.setAttribute('name','pause')
    }
}    
const video_mute = () => {
    
    video.volume = 0.0;
    console.log('video muted');

}
const video_sound = () => {
    
    video.volume = 1.0;
    console.log('video is muted');

}
const video_increase_time = () => {
    
    video.currentTime += 5;
    console.log('video time Increased');

}
const video_decrease_time = () => {
    

    video.currentTime -= 5;
    console.log('video time Decreased');

}
CLICK({ ELEMENT:body,FUNCTION:friday_test})
CLICK({ ELEMENT:video_control_button,FUNCTION:video_control})
// CLICK({ ELEMENT:video_mute_button,FUNCTION:video_mute})
// CLICK({ ELEMENT:video_sound_button,FUNCTION:video_sound})
// CLICK({ ELEMENT:video_increase_button,FUNCTION:video_increase_time})
// CLICK({ ELEMENT:video_decrease_button,FUNCTION:video_decrease_time})
CLICK({ ELEMENT:videoContainer,FUNCTION:videoContainerTools})
video.addEventListener('timeupdate', (e)=>{
    
    let {currentTime,duration} = e.target;
    let timePercent = (currentTime / duration) * 100;
    videoFollower.style.width = `${timePercent}%`;
    timeDetailsLeft.innerText = formatTime(currentTime);
    
    
})
video.load();
video.addEventListener('loadeddata', (e)=>{
    
    let {currentTime,duration} = e.target;
    
    timeDetailsRight.innerText = formatTime(duration);
    
})
videoTimeLine.addEventListener('pointerdown',(e) => {
    
    videoTimeLine.setPointerCapture(e.pointerId);
    setTimeLinePosition(e);
    videoTimeLine.addEventListener('pointermove',setTimeLinePosition);
    videoTimeLine.addEventListener('pointerup',() => {
        videoTimeLine.removeEventListener('pointermove', setTimeLinePosition);
    },{once : true})
});
// if (video.play) {
//     log
// }
// Complex Functionalities 
const setTimeLinePosition = (e) => {
    let react = videoTimeLine.getBoundingClientRect();
    let currentTimeLine = (e.clientX / react.width) * 100;
    videoFollower.style.width = `${currentTimeLine}%`;
    video.currentTime = currentTimeLine;
    // console.log(e.clientX);
}
const formatTime = (time) => {
    let seconds = Math.floor(time % 60),
        minutes = Math.floor(time / 60) % 60,
        hours = Math.floor(time / 3600)
    
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;
    
    if(hours == 0) return `${minutes}:${seconds}`;
    return `${hours}:${minutes}:${seconds}`;
    
}
console.log('Building Video Player');


