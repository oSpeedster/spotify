const progressbarD = document.getElementById('progress-bar');

let estavaTocando = ''

//const progressb = document.getElementById("progressb");

let progressbstyle = (progressb.offsetLeft);

//dragElementD(progressb)

function dragElementD(elmnt) {
    var pos1=0, pos2=0, pos3=0, pos4=0;

    elmnt.onmousedown = dragMouseDownD;

    function dragMouseDownD(e) {
        e = e || window.event;
        e.preventDefault();
        
        pos3 = e.clientX;
        document.onmouseup = closeDragElementD;
        
        document.onmousemove = elementDragD;

        if(!audio.paused) {
            audio.pause()
            estavaTocando = true
        }
    }
    
    function elementDragD(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos3 = e.clientX;
        // set the element's new position:
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        progressbstyle = (progressb.offsetLeft - pos1)
      }
    
      function closeDragElementD() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;

        if(estavaTocando == true) {
            audio.play()
            estavaTocando = false
            audio.currentTime = (audio.duration  * (parseFloat(document.getElementById('progressprogress').style.width) / 100))
        }
        if(audio.paused) {
            audio.currentTime = (audio.duration  * (parseFloat(document.getElementById('progressprogress').style.width) / 100))
        }
      }
    
    //progressbarD.style.width = '100px'

    if(progressbstyle <= 365) {
        progressb.style.left = '370px'
      }
    if(progressbstyle >= 732) {
        progressb.style.left = '732px'
    }

}

function loopFunction(delay, callback){
    var loop = function(){
        callback(progressb);
        setTimeout(loop, delay);
    }; loop();
};

loopFunction(1, dragElementD);

// -5px - 355px