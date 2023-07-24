const progressbarD1 = document.getElementById('progress-bar1');

let estavaTocando1 = ''

const progressb1 = document.getElementById("progressb1");

let progressbstyle1 = (progressb1.offsetLeft);

//dragElementD1(progressb1)

function dragElementD1(elmnt) {
    var pos1=0, pos2=0, pos3=0, pos4=0;

    elmnt.onmousedown = dragMouseDownD1;

    function dragMouseDownD1(e) {
        e = e || window.event;
        e.preventDefault();
        
        pos3 = e.clientX;
        document.onmouseup = closeDragElementD1;
        
        document.onmousemove = elementDragD1;

        if(!audio1.paused) {
            audio1.pause()
            estavaTocando1 = true
        }
    }
    
    function elementDragD1(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos3 = e.clientX;
        // set the element's new position:
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        progressbstyle1 = (progressb1.offsetLeft - pos1)
      }
    
      function closeDragElementD1() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;

        if(estavaTocando1 == true) {
            audio1.play()
            estavaTocando1 = false
            audio1.currentTime = (audio1.duration  * (parseFloat(document.getElementById('progressprogress1').style.width) / 100))
        }
        if(audio1.paused) {
            audio1.currentTime = (audio1.duration  * (parseFloat(document.getElementById('progressprogress1').style.width) / 100))
        }
      }
    
    //progressbarD1.style.width = '100px'

    if(progressbstyle1 <= 365) {
        progressb1.style.left = '370px'
      }
    if(progressbstyle1 >= 732) {
        progressb1.style.left = '732px'
    }

}

function loopFunction(delay, callback){
    var loop = function(){
        callback(progressb1);
        setTimeout(loop, delay);
    }; loop();
};

loopFunction(1, dragElementD1);

// -5px - 355px