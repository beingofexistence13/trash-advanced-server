// const mdn = () => {
//     // Prefer camera resolution nearest to 1280x720.
//     const constraints = { audio: true, video: { width: 1280, height: 720 } };

//     navigator.mediaDevices.getUserMedia(constraints)
//     .then(function(mediaStream) {
//         console.log('video');

//       const video = document.querySelector('video');
//       video.srcObject = mediaStream;
//       video.onloadedmetadata = function(e) {
//         video.play();
//         console.log('v8deon playing');
//       };
//     })
//     .catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.
// }
// ///////////////////// Video Recorder ///////////////////// //
// async function videoPLUSaudio_recorder() {
//     try {
//         stream = await navigator.mediaDevices.getUserMedia({
//             video: true
//         })
//         audio = await navigator.mediaDevices.getUserMedia({
//             audio: {
//                 echoCancellation: true,
//                 noiseSuppression: true,
//                 sampleRate: 44100
//             }
//         })
//         setupVideo();
//     } catch (err) {
//         console.error(err);
//     }
// }
// const setupVideo = () => {
//     if (!stream) console.warn('No Media is found or got any Streaming Source');
//     video = q('video');
//     video.srcObject = stream;
//     Video.play();
// }


// // Start Recording or Streaming
// const startStreamFunction = async () => {
//     await videoPLUSaudio_recorder();
//     if (!stream && !audio) console.warn('No Stream Available');
//     try {
//         mixedstream = new MediaStream([
//             ...stream.getTracks(),
//             ...audio.getTracks()
//         ])
//         recorder = new MediaRecorder(mixedstream);
//         recorder.ondataavailable = handleDataAvailable;
//         recorder.onstop = handleStop;
//         recorder.onstart = 200;
//         console.log('Recording has started...');
//     } catch (e) {
//         console.warn(e);
//     }
// }
// CLICK({
//     ELEMENT : start_stream,
//     FUNCTION : startStreamFunction
// })
// // End Recording or Streaming
// const endStreamFunction = async () => {
//     console.log('Stream Ended!');
// }
// CLICK({
//     ELEMENT : end_stream,
//     FUNCTION : endStreamFunction
// })













// let classOrId = 'canvas';
// console.info(`root{
// }
// canvas{

//     --${classOrId}-display: block;

// }
// canvas{

//     background: #27293E;
//     display: var(--canvas-display);
//     flex: var(--canvas-flex);
//     justify-content: var(--canvas-justifyContent);
//     align-items: var(--canvas-alignItems);
//     column-gap: var(--canvas-columnGap);
//     row-gap: var(--canvas-rowGap);
//     grid: var(--canvas-grid);
//     grid-gap: var(--canvas-gridGap);
//     animation: none;
//     border: var(--canvas-border);
//     box-shadow: var(--canvas-boxShadow);
//     border-radius: var(--canvas-borderRadius);
//     color: var(--canvas-color);
//     cursor: var(--canvas-cursor);
//     clip: var(--canvas-clip);
//     font: var(--canvas-font);
//     filter: var(--canvas-filter);
//     transform: var(--canvas-transform);
//     transition: var(--canvas-transition);
//     text-align: var(--canvas-textAlign);
//     perspective: var(--canvas-perspective);
//     overflow: var(--canvas-overflow);
//     opacity: var(--canvas-opacity);

//     margin: var(--canvas-margin);
//     padding: var(--canvas-paddin);

//     position: var(--canvas-position);
//     top: var(--canvas-top);
//     left: var(--canvas-left);

//     min-height: var(--canvas-minHeigh);
//     max-height: var(--canvas-maxHeight);
//     min-width: var(--canvas-minWidth);
//     max-width: var(--canvas-maxWídth);
//     height: var(--canvas-height);
//     width: var(--canvas-width);

//     z-index: var(--canvas-zIndex);
// }

// `);

