'use-strick'
// Imports
import { q, qa, CLICK } from './website/ux/dom.js';
// variables
const body = q('body');
const html = q('html');
let videoCenter = q('.center_tools');
let videoContainer = q('.video_player_container');
let video = q('.video');
let canvas = q('.canvas');
let ctx = canvas.getContext('2d');
let videoAllElement = qa('.top_tools,.bottom_tools,.video_timeLine,.video_toolbar,.video_social,.video_hello,.hello_control,.hello_control *');
let timeDetailsLeft = q('.timeDetails_left');
let timeDetailsRight = q('.timeDetails_right');
let videoTimeLine = q('.video_timeLine');
let videoFollower = q('.timeLine_follower');
let video_control_button = q('.control_container');
let playIcon = q('.play_button');
let pauseIcon = q('.pause_button');
let video_mute_button = q('.video_mute');
let video_sound_button = q('.video_sound');
let video_increase_button = q('.video_increase');
let video_decrease_button = q('.video_decrease');
const text = 'Hello Sir,I am Friday';
const rightDoubleClick = q('.right_double_click');
const leftDoubleClick = q('.left_double_click');
let bufferedAmount = q('.buffered_amount');
let nextVideoContainer = q('.nextvideo_player_container');
let previousVideoContainer = q('.previousvideo_player_container');
let clickAndHoldButton = q('.click_and_hold');
let checkMarkContainer = q('.checkMark_container'),
    layerContainer = q('.layer_container'),
    fullScreenContainer = q('.fullScreen_container');
let vcstartX, vcstartY, vcmoveX, vcmoveY;
let startX, startY, moveX, moveY;
let x, y;
let helloSearcherDiv = q('.hello_searcher_div');
let holdDetectionFuction, holdDetection;
let mouseIsDown = false;
video.load();


// Custom AddeventListner
class clickandholdhard {
    constructor(target, callback) {
        this.target = target;
        this.callback = callback;
        this.isHeld = false;
        this.activeHoldTimeoutId = null;

        ['mousedown', 'touchstart'].forEach((type) => {
            this.target.addEventListener(type, this._onHoldStart.bind(this));
        });

        ['mouseup', 'touchend'].forEach((type) => {
            this.target.addEventListener(type, this._onHoldEnd.bind(this));
        });

    }
    _onHoldStart() {
        this.isHeld = true;
        this.activeHoldTimeoutId = setTimeout(() => {
            if (this.isHeld) {

                this.callback();
            }

        }, 2000)
    }
    _onHoldEnd() {
        this.isHeld = false;
        clearTimeout(this.activeHoldTimeoutId);
    }
}
class clickandhold {
    constructor(target, callback) {
        this.target = target;
        this.callback = callback;
        this.isHeld = false;
        this.activeHoldTimeoutId = null;

        ['mousedown', 'touchstart'].forEach((type) => {
            this.target.addEventListener(type, this._onHoldStart.bind(this));
        });

        ['mouseup', 'touchend'].forEach((type) => {
            this.target.addEventListener(type, this._onHoldEnd.bind(this));
        });

    }
    _onHoldStart() {
        this.isHeld = true;
        this.activeHoldTimeoutId = setTimeout(() => {
            if (this.isHeld) {

                this.callback();
            }

        }, 1000)
    }
    _onHoldEnd() {
        this.isHeld = false;
        clearTimeout(this.activeHoldTimeoutId);
    }
}
class clickandholdsoft {
    constructor(target, callback) {
        this.target = target;
        this.callback = callback;
        this.isHeld = false;
        this.activeHoldTimeoutId = null;

        ['mousedown', 'touchstart'].forEach((type) => {
            this.target.addEventListener(type, this._onHoldStart.bind(this));
        });

        ['mouseup', 'touchend'].forEach((type) => {
            this.target.addEventListener(type, this._onHoldEnd.bind(this));
        });

    }
    _onHoldStart() {
        this.isHeld = true;
        this.activeHoldTimeoutId = setTimeout(() => {
            if (this.isHeld) {

                this.callback();
            }

        }, 500)
    }
    _onHoldEnd() {
        this.isHeld = false;
        clearTimeout(this.activeHoldTimeoutId);
    }
}


// Complex Functionalities 
let friday_test = () => {

    try {

        // const utterance = new SpeechSynthesisUtterance(text);
        // speechSynthesis.speak(utterance);

    } catch (e) {
        return console.log(e.message);
    }


}
const video_control_status = () => {

    videoAllElement.forEach((videoAllElements) => {
        let display = getComputedStyle(videoContainer).display;
        let hide = () => {

            videoAllElements.style.display = 'none';

        }

        videoAllElements.remove();
    })
}
const video_control = () => {

    // thumbnail.style.display = 'none';
    video.paused ? video.play() : video.pause();
    if (video.paused) {

        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';

    } else {

        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';

    }
}
const setTimeLinePosition = (e) => {

    let { currentTime, duration, audioTracks } = e.target;
    let timeLineWidth = videoTimeLine.clientWidth;
    // let react = videoTimeLine.getBoundingClientRect();

    let currentTimeLine = (e.clientX / timeLineWidth) * 100;
    videoFollower.style.width = `${parseFloat(currentTimeLine).toFixed()}%`;
    video.currentTime = (e.clientX / timeLineWidth) * video.duration;
    timeDetailsLeft.innerText = formatTime(video.currentTime);
    // console.log(video.currentTime);
    // console.log(currentTime);
    // console.log(video.audioTracks);
}
const formatTime = (time) => {
    let seconds = Math.floor(time % 60),
        minutes = Math.floor(time / 60) % 60,
        hours = Math.floor(time / 3600)

    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;

    if (hours == 0) return `${minutes}:${seconds}`;
    return `${hours}:${minutes}:${seconds}`;

}
const hider = (e) => {

    videoAllElement.forEach((videoAllElements) => {

        videoAllElements.classList.toggle('please');

    });
    videoCenter.classList.toggle('all');
}
const videoContainerDblclick = (e) => {

    if (videoCenter.classList.contains('Nooo')) {

        // console.log('No handler');

    } else {

        videoAllElement.forEach((videoAllElements) => {

            videoAllElements.classList.remove('please');

        })

    }
    if (e.clientX < videoContainer.clientWidth / 2) {

        video.currentTime -= 5;
        videoContainer.classList.add('overflower');
        videoAllElement.forEach((videoAllElements) => {

            videoAllElements.classList.add('please');

        });
        videoCenter.classList.add('all');
        leftDoubleClick.style.display = 'flex';
        leftDoubleClick.addEventListener('click', () => {
            // console.log('Left Clicked');
        })


    } else {

        video.currentTime += 5;
        videoContainer.classList.add('overflower');
        videoAllElement.forEach((videoAllElements) => {

            videoAllElements.classList.add('please');

        });
        videoCenter.classList.add('all');
        rightDoubleClick.style.display = 'flex';
        rightDoubleClick.addEventListener('click', () => {
            // console.log('Right Clicked');
        })
    }
    let dblClickCloser = () => {
        // rightDoubleClick.addEventListener('click', (e)=>{

        //     x = e.clientX - e.target.offsetLeft;
        //     y = e.clientY - e.target.offsetTop;
        //     let ripples = document.createElement('span');
        //     ripples.classList.add('ripples');

        //     ripples.style.top = `${y}px`;
        //     ripples.style.left = `${x}px`;

        //     rightDoubleClick.appendChild(ripples);


        //     rightDoubleClick.classList.add('continue');
        //     video.currentTime += 5;
        // })
        // leftDoubleClick.addEventListener('click', (e)=>{

        //     leftDoubleClick.classList.add('continue');
        //     video.currentTime -= 5;

        // })
        // rightDoubleClick.addEventListener('click',()=>{
        //     console.log('op');
        // })
        // rightDoubleClick.addEventListener('pointerdown', (e)=>{

        //     let x = e.clientX - e.target.offsetLeft;
        //     let y = e.clientY - e.target.offsetTop;
        //     let ripples = document.createElement('span');
        //     ripples.classList.add('ripples');

        //     ripples.style.top = `${y}px`;
        //     ripples.style.left = `${x}px`;

        //     rightDoubleClick.appendChild(ripples);
        //     rightDoubleClick.classList.add('continue');
        //     console.log('op right');
        // })
        // leftDoubleClick.addEventListener('pointerdown', (e)=>{

        //     let x = e.clientX - e.target.offsetLeft;
        //     let y = e.clientY - e.target.offsetTop;

        //     // let x = e.clientX;
        //     // let y = e.clientY;
        //     let ripples = document.createElement('span');
        //     ripples.classList.add('ripples');

        //     ripples.style.top = `${y}px`;
        //     ripples.style.left = `${x}px`;

        //     leftDoubleClick.appendChild(ripples);
        //     leftDoubleClick.classList.add('continue');
        //     console.log('oo left');
        //     console.log(x,y);

        // })
        if (rightDoubleClick.classList.contains('continue') || leftDoubleClick.classList.contains('continue')) {

            // console.log('Continue');

        } else {

            videoCenter.addEventListener('click', hider);
            videoContainer.classList.remove('overflower');
            videoCenter.classList.remove('all');
            videoAllElement.forEach((videoAllElements) => {

                videoAllElements.classList.remove('please');

            });
            leftDoubleClick.style.display = 'none';
            rightDoubleClick.style.display = 'none';
            clearInterval(theInterval);

        }
        rightDoubleClick.classList.remove('continue')
        leftDoubleClick.classList.remove('continue')

    }
    rightDoubleClick.addEventListener('pointerdown', (e) => {

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let ripples = document.createElement('span');
        ripples.classList.add('ripples');

        ripples.style.top = `${y}px`;
        ripples.style.left = `${x}px`;

        rightDoubleClick.appendChild(ripples);
        rightDoubleClick.style.background = '#FFFFFF4FBF';

        setTimeout(() => {
            ripples.remove();
        }, 600)
        rightDoubleClick.classList.add('continue');
        video.currentTime += 10;
    })
    leftDoubleClick.addEventListener('pointerdown', (e) => {

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let ripples = document.createElement('span');
        ripples.classList.add('ripples');

        ripples.style.top = `${y}px`;
        ripples.style.left = `${x}px`;

        leftDoubleClick.appendChild(ripples);
        leftDoubleClick.style.background = '#FFFFFF4FBF';
        setTimeout(() => {
            ripples.remove();
        }, 600)
        leftDoubleClick.classList.add('continue');
        video.currentTime -= 10;
    })

    videoCenter.classList.add('Nooo')
    videoCenter.removeEventListener('click', hider);
    let theInterval = setInterval(dblClickCloser, 1300);

}
const helloSearcherDivMover = (e) => {

    vcmoveX = e.touches[0].clientX - helloSearcherDiv.clientWidth;
    vcmoveY = e.touches[0].clientY - helloSearcherDiv.clientHeight;
    let x = e.touches[0].clientX - e.touches[0].offsetX;
    let y = e.touches[0].clientY - e.touches[0].offsetY;

    if (helloSearcherDiv.classList.contains('canMoveTimeLine')) {

        // console.log('You hold Hello Searcher for 1s');
        // console.log('Mission Acomplished');
        helloSearcherDiv.style.left = `${vcmoveX}px`;
        helloSearcherDiv.style.top = `${vcmoveY}px`;
        videoContainer.style.overflowX = 'hidden';
        helloSearcherDiv.style.zIndex = '1';
        // console.log(videoContainer.clientWidth);


    }


    // console.log(vcmoveX);
}


// AddeventListner Initialization
new clickandholdhard(videoCenter, () => {

    videoCenter.classList.add('canMoveTimeLine')
    // console.log('You hold for 1s on VideoCenter');
    // timeLineMove();
    // videoCenter.classList.remove('canMoveTimeLine');
    // videoContainer.removeEventListener('touchmove',helloSearcherDivMover)


})
new clickandhold(helloSearcherDiv, () => {

    helloSearcherDiv.classList.add('canMoveTimeLine');
    // console.log('You hold Hello Sercher for 1s on VideoCenter');
    // timeLineMove();
    // videoCenter.classList.remove('canMoveTimeLine');
    // videoContainer.removeEventListener('touchmove',helloSearcherDivMover)


})
video.addEventListener('timeupdate', (e) => {

    let { currentTime, duration } = e.target;
    let timePercent = (currentTime / duration) * 100;
    videoFollower.style.width = `${timePercent}%`;
    timeDetailsLeft.innerText = formatTime(currentTime);


})
video.addEventListener('loadeddata', (e) => {

    let { currentTime, duration } = e.target;
    timeDetailsRight.innerText = formatTime(duration);

})
videoTimeLine.addEventListener('pointerdown', (e) => {

    videoTimeLine.setPointerCapture(e.pointerId);
    setTimeLinePosition(e);
    // video.load();
    videoTimeLine.addEventListener('pointermove', setTimeLinePosition);
    videoTimeLine.addEventListener('pointerup', () => {
        videoTimeLine.removeEventListener('pointermove', setTimeLinePosition);
        // thumbnail.style.display = 'none';
        video.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';


    }, { once: true })


});
videoTimeLine.addEventListener('click', (e) => {

    // thumbnail.style.display = 'none';
    setTimeLinePosition(e);

})
checkMarkContainer.addEventListener('click', () => {

    console.log('checkMarkContainer Search Is in Development');

})
layerContainer.addEventListener('click', () => {

    console.log('Layer Search Is in Development');

})
fullScreenContainer.addEventListener('click', () => {

    try {

        videoContainer.requestFullscreen();

    } catch (e) { console.log(e); }

})
videoCenter.addEventListener('click', hider);
videoContainer.addEventListener('dblclick', videoContainerDblclick)
videoCenter.addEventListener('touchstart', (e) => {

    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    // console.log('All things are set');
    // if(videoContainer.classList.contains('canMoveTimeLine')){

    //     videoCenter.classList.add('canMoveTimeLine');   
    //     console.log('Analised');

    // }

})
videoCenter.addEventListener('touchmove', (e) => {

    const timeLineMove = () => {

        moveX = e.touches[0].clientX;
        moveY = e.touches[0].clientY;
        let videoContainerWidth = videoContainer.clientWidth;
        let currentTimeLine;
        currentTimeLine = (moveX / videoContainerWidth) * 100;
        videoFollower.style.width = `${parseFloat(currentTimeLine).toFixed()}%`;
        video.currentTime = (moveX / videoContainerWidth) * video.duration;
        videoTimeLine.classList.add('hello_mode_video')
        videoContainer.classList.add('hello_mode_video')

    }
    if (videoCenter.classList.contains('canMoveTimeLine')) {

        timeLineMove();

    }
    if (startX + 100 < moveX) {

        video.volume = '0.0';

    }
    else if (startX - 100 > moveX) {

        video.style.filter = `brightness(100%)`;

    }
    if (startX + 100 < moveX || startX - 100 > moveX) {

        if (startY + 100 < moveY || startY - 100 > moveY) {

            // console.log('X To Y');
        }

    }
    // Vary Vary Important
    if(startY+100 < moveY || startY-100 > moveY){
        if(startX+100 < moveX || startX-100 > moveX){

            // console.log('Y To X');
        }

        let react = videoContainer.getBoundingClientRect();
        let brightnessPercentBinary = (e.touches[0].clientY / videoContainer.clientHeight) * 10;
        let contrastPercentBinary = (e.touches[0].clientY / videoContainer.clientHeight) * 10;
        let volumePercentBinary = (e.touches[0].clientY / videoContainer.clientHeight) * 10;
        let brightnessPercent = parseFloat(brightnessPercentBinary.toFixed());
        let contrastPercent = parseFloat(brightnessPercentBinary.toFixed());
        let volumePercent = parseFloat(volumePercentBinary.toFixed());

        brightnessPercent > 0 ? localStorage.setItem('Console','Greateer') : brightnessPercent = 1;
        brightnessPercent > 2 ? brightnessPercent = 2 : localStorage.setItem('Console','Less');
        contrastPercent > 0 ? localStorage.setItem('Console','Greateer') : contrastPercent = 1;
        contrastPercent > 2 ? contrastPercent = 1.5 : localStorage.setItem('Console','Less');
        volumePercent > 0 ? localStorage.setItem('Console','Greateer') : volumePercent = 0;
        volumePercent > 9 ? volumePercent = 9 : localStorage.setItem('Console','Less');

        if (e.touches[0].clientX < videoContainer.clientWidth / 2) {

            video.style.filter = `brightness(${brightnessPercent})`;


        } else {

            video.volume = `0.${volumePercent}`;

        }     

    }


})
videoCenter.addEventListener('touchend', (e) => {

    videoCenter.classList.remove('canMoveTimeLine')
    // videoContainer.classList.remove('canMoveTimeLine');
    // mouseIsDown = false;
    // if(videoCenter.classList.contains('canMoveTimeLine')){

    //     // console.log('Good');
    //     videoCenter.classList.remove('canMoveTimeLine')
    //     videoContainer.addEventListener('touchmove',helloSearcherDivMover)

    // }else{

    //     // console.log('Hold For Some more time');

    // }

})
videoContainer.addEventListener('touchmove', helloSearcherDivMover)
videoContainer.addEventListener('touchend', (e) => {

    helloSearcherDiv.style.zIndex = '10';
    videoContainer.style.overflow = 'auto';
    helloSearcherDiv.classList.remove('canMoveTimeLine');
    videoTimeLine.classList.remove('hello_mode_video')
    videoContainer.classList.remove('hello_mode_video')
    // if(startX+100 < moveX || startX-100 > moveX){

    //     // console.log('XY On Touch End Direction');


    // }

})
CLICK({ ELEMENT: body, FUNCTION: friday_test })
CLICK({ ELEMENT: video_control_button, FUNCTION: video_control })
CLICK({ ELEMENT: nextVideoContainer, FUNCTION: () => { console.log('Next Video but will use 10minutes add now!'); } })
CLICK({ ELEMENT: previousVideoContainer, FUNCTION: () => { console.log('Previous Video but will use 10minutes remove now!'); } })


// Buffer Length
window.onload = function() {
    video.addEventListener('progress', function() {
        let duration = video.duration;
        for (let i = 0; i < video.buffered.length; i++) {
            if (video.buffered.start(video.buffered.length - 1 - i) < video.currentTime) {
                bufferedAmount.style.width = (video.buffered.end(video.buffered.length - 1 - i) / duration) * 100 + "%";
                break;
            }
        }
    });
    video.addEventListener('paused', function() {
        let duration = video.duration;
        for (let i = 0; i < video.buffered.length; i++) {
            if (video.buffered.start(video.buffered.length - 1 - i) < video.currentTime) {
                bufferedAmount.style.width = (video.buffered.end(video.buffered.length - 1 - i) / duration) * 100 + "%";
                break;
            }
        }
    });

}
// Canvas
// window.onload = function() {
//     ctx.font = '10px Monospace';
    
//     //debug
//     const gui = new dat.GUI()
//     const spectrume = {
//         y:canvas.height/2,
//         length: 0.05,
//         amplitude: 10
//     }
//     gui.add(spectrume, 'y', 0,canvas.height)
//     gui.add(spectrume, 'length', -0.01,0.09)
//     gui.add(spectrume, 'amplitude', -500, 500)


//     const animate = ()=>{
        
//         requestAnimationFrame(animate);
//         ctx.beginPath();
        
//         ctx.moveTo(0,canvas.height/2)
//         for(let i = 0;i<canvas.clientWidth;i++){
            
//             ctx.lineWidth = 2;
//             ctx.lineTo(i,spectrume.y + Math.sin(i * spectrume.length) * spectrume.amplitude);
            
//         }
//         ctx.stroke();
        
//     }
//     animate();



// }




// let ion_icons = qa('ion-icon');
// ion_icons.forEach((ion_icon) => {
//     console.log(ion_icon);
// })
let icons = qa('ion-icon');
let createElementFunction = (element)=>{ 
    return document.createElement(element);
}
let source;

// console.log(img);
icons.forEach((icon)=>{
    
    
    let image = createElementFunction('img');
    let source = icon.getAttribute('name');
    icon.classList.add('.icon_container')
    image.classList.add('icons');
    image.setAttribute('src',`./icons/${source}.svg`)
    icon.appendChild(image);
    // console.log(image);
    
    // icon.classList.add('icons');
    // let url = icon.getAttribute('name');
    // icon.style.background = `url(/icons/ellipsis-vertical.svg) no-repeat center`;
    // icon.style.background = `red`;
    
})
