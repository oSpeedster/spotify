// const progressbard = document.getElementById('progressbar');


// if(progressbard.clientWidth == 0) {
//     document.getElementById('volumeicon').src = 'https://cdn-icons-png.flaticon.com/512/786/786387.png'
// }


// const volumeb = document.getElementById("volumeb");

// let volumebstyle = (volumeb.offsetLeft);

// dragElement(volumeb)

// volumeb.style.left = '943px'

// function dragElement(elmnt) {
//     var pos1=0, pos2=0, pos3=0, pos4=0;

//     elmnt.onmousedown = dragMouseDown;

//     function dragMouseDown(e) {
//         e = e || window.event;
//         e.preventDefault();
        
//         pos3 = e.clientX;
//         document.onmouseup = closeDragElement;
        
//         document.onmousemove = elementDrag;
//     }

//     function elementDrag(e) {
//         e = e || window.event;
//         e.preventDefault();
//         // calculate the new cursor position:
//         pos1 = pos3 - e.clientX;
//         pos3 = e.clientX;
//         // set the element's new position:
//         elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//         volumebstyle = (volumeb.offsetLeft - pos1)
//       }
    
//       function closeDragElement() {
//         // stop moving when mouse button is released:
//         document.onmouseup = null;
//         document.onmousemove = null;
//       }

//       if(elmnt.style.left <= '943px') {
//         if(elmnt.style.left <= '933px') {
//             if(elmnt.style.left <= '923px') {
//                 if(elmnt.style.left <= '913px') {
//                     if(elmnt.style.left <= '903px') {
//                         if(elmnt.style.left <= '893px') {
//                             if(elmnt.style.left <= '883px') {
//                                 if(elmnt.style.left <= '873px') {
//                                     if(elmnt.style.left <= '863px') {
//                                         if(elmnt.style.left <= '853px') {
//                                             if(elmnt.style.left <= '843px') {
//                                                 progressbard.style.width = '0px'
//                                                 audio.volume = 0
//                                                 document.getElementById('volumeicon').src = 'https://cdn-icons-png.flaticon.com/512/786/786387.png'

//                                             } else {
//                                                 progressbard.style.width = '10px'
//                                                 audio.volume = 0.1
//                                                 document.getElementById('volumeicon').src = 'https://cdn-icons-png.flaticon.com/512/727/727270.png'

//                                             }
//                                         } else {
//                                             progressbard.style.width = '20px'
//                                             audio.volume = 0.2
//                                             document.getElementById('volumeicon').src = 'https://cdn-icons-png.flaticon.com/512/727/727270.png'
//                                         }
//                                     } else {
//                                         progressbard.style.width = '30px'
//                                         audio.volume = 0.3
//                                         document.getElementById('volumeicon').src = 'https://cdn-icons-png.flaticon.com/512/727/727270.png'
//                                     }
//                                 } else {
//                                     progressbard.style.width = '40px'
//                                     audio.volume = 0.4
//                                     document.getElementById('volumeicon').src = 'https://cdn-icons-png.flaticon.com/512/727/727269.png'
//                                 }
//                             } else {
//                                 progressbard.style.width = '50px'
//                                 audio.volume = 0.5
//                                 document.getElementById('volumeicon').src = 'https://cdn-icons-png.flaticon.com/512/727/727269.png'

//                             }
//                         } else {
//                             progressbard.style.width = '60px'
//                             audio.volume = 0.6
//                             document.getElementById('volumeicon').src = 'https://cdn-icons-png.flaticon.com/512/727/727269.png'
//                         }
//                     } else {
//                         progressbard.style.width = '70px'
//                         audio.volume = 0.7
//                         document.getElementById('volumeicon').src = 'https://cdn-icons-png.flaticon.com/512/3/3745.png'
//                     }
//                 } else {
//                     progressbard.style.width = '80px'
//                     audio.volume = 0.8
//                     document.getElementById('volumeicon').src = 'https://cdn-icons-png.flaticon.com/512/3/3745.png'

//                 }
//             } else {
//                 progressbard.style.width = '90px'
//                 audio.volume = 0.9
//                 document.getElementById('volumeicon').src = 'https://cdn-icons-png.flaticon.com/512/3/3745.png'

//             }
//         } else {
//             progressbard.style.width = '100px'
//             audio.volume = 1
//             document.getElementById('volumeicon').src = 'https://cdn-icons-png.flaticon.com/512/3/3745.png'
//         }
//       }
    
//     //progressbard.style.width = '100px'

//     if(volumebstyle >= 943) {
//         volumeb.style.left = '943px'
//       }
//     if(volumebstyle <= 843) {
//         volumeb.style.left = '843px'
//     }
// }

// function loopFunction(delay, callback){
//     var loop = function(){
//         callback(volumeb);
//         setTimeout(loop, delay);
//     }; loop();
// };

// loopFunction(1, dragElement);

// 843px - 943px

function volumeBar() {
    let volumerange = document.querySelector('.volumerange');

    audio.volume = (volumerange.value / 100)

    if(volumerange.value >= 70) {
        document.getElementById('volumeicon').src = 'https://cdn-icons-png.flaticon.com/512/3/3745.png'
    }
    if(volumerange.value >= 40 && volumerange.value <= 69) {
        document.getElementById('volumeicon').src = 'https://cdn-icons-png.flaticon.com/512/727/727269.png'
    }
    if(volumerange.value >= 1 && volumerange.value <= 39) {
        document.getElementById('volumeicon').src = 'https://cdn-icons-png.flaticon.com/512/727/727270.png'
    }
    if(volumerange.value == 0) {
        document.getElementById('volumeicon').src = 'https://cdn-icons-png.flaticon.com/512/786/786387.png'
    }

}

function loopVolume(delay, callback){
    var loop = function(){
        callback();
        setTimeout(loop, delay);
    }; loop();
};

loopVolume(1, volumeBar);
