const progressbar1 = document.getElementById('progressbar1');


if(progressbar1.clientWidth == 0) {
    document.getElementById('volumeicon1').src = 'https://cdn-icons-png.flaticon.com/512/786/786387.png'
}


const volumeb1 = document.getElementById("volumeb1");

let volumebstyle1 = (volumeb1.offsetLeft);

dragElement1(volumeb1)

volumeb1.style.left = '943px'

function dragElement1(elmnt) {
    var pos1=0, pos2=0, pos3=0, pos4=0;

    elmnt.onmousedown = dragMouseDown1;

    function dragMouseDown1(e) {
        e = e || window.event;
        e.preventDefault();
        
        pos3 = e.clientX;
        document.onmouseup = closeDragElement1;
        
        document.onmousemove = elementDrag1;
    }

    function elementDrag1(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos3 = e.clientX;
        // set the element's new position:
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        volumebstyle1 = (volumeb1.offsetLeft - pos1)
      }
    
      function closeDragElement1() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }

      if(elmnt.style.left <= '943px') {
        if(elmnt.style.left <= '933px') {
            if(elmnt.style.left <= '923px') {
                if(elmnt.style.left <= '913px') {
                    if(elmnt.style.left <= '903px') {
                        if(elmnt.style.left <= '893px') {
                            if(elmnt.style.left <= '883px') {
                                if(elmnt.style.left <= '873px') {
                                    if(elmnt.style.left <= '863px') {
                                        if(elmnt.style.left <= '853px') {
                                            if(elmnt.style.left <= '843px') {
                                                progressbar1.style.width = '0px'
                                                audio1.volume = 0
                                                document.getElementById('volumeicon1').src = 'https://cdn-icons-png.flaticon.com/512/786/786387.png'

                                            } else {
                                                progressbar1.style.width = '10px'
                                                audio1.volume = 0.1
                                                document.getElementById('volumeicon1').src = 'https://cdn-icons-png.flaticon.com/512/727/727270.png'

                                            }
                                        } else {
                                            progressbar1.style.width = '20px'
                                            audio1.volume = 0.2
                                            document.getElementById('volumeicon1').src = 'https://cdn-icons-png.flaticon.com/512/727/727270.png'
                                        }
                                    } else {
                                        progressbar1.style.width = '30px'
                                        audio1.volume = 0.3
                                        document.getElementById('volumeicon1').src = 'https://cdn-icons-png.flaticon.com/512/727/727270.png'
                                    }
                                } else {
                                    progressbar1.style.width = '40px'
                                    audio1.volume = 0.4
                                    document.getElementById('volumeicon1').src = 'https://cdn-icons-png.flaticon.com/512/727/727269.png'
                                }
                            } else {
                                progressbar1.style.width = '50px'
                                audio1.volume = 0.5
                                document.getElementById('volumeicon1').src = 'https://cdn-icons-png.flaticon.com/512/727/727269.png'

                            }
                        } else {
                            progressbar1.style.width = '60px'
                            audio1.volume = 0.6
                            document.getElementById('volumeicon1').src = 'https://cdn-icons-png.flaticon.com/512/727/727269.png'
                        }
                    } else {
                        progressbar1.style.width = '70px'
                        audio1.volume = 0.7
                        document.getElementById('volumeicon1').src = 'https://cdn-icons-png.flaticon.com/512/3/3745.png'
                    }
                } else {
                    progressbar1.style.width = '80px'
                    audio1.volume = 0.8
                    document.getElementById('volumeicon1').src = 'https://cdn-icons-png.flaticon.com/512/3/3745.png'

                }
            } else {
                progressbar1.style.width = '90px'
                audio1.volume = 0.9
                document.getElementById('volumeicon1').src = 'https://cdn-icons-png.flaticon.com/512/3/3745.png'

            }
        } else {
            progressbar1.style.width = '100px'
            audio1.volume = 1
            document.getElementById('volumeicon1').src = 'https://cdn-icons-png.flaticon.com/512/3/3745.png'
        }
      }
    
    //progressbar1.style.width = '100px'

    if(volumebstyle1 >= 943) {
        volumeb1.style.left = '943px'
      }
    if(volumebstyle1 <= 843) {
    volumeb1.style.left = '843px'
    }
}

function loopFunction1(delay, callback){
    var loop = function(){
        callback(volumeb1);
        setTimeout(loop, delay);
    }; loop();
};

loopFunction1(1, dragElement1);

// 843px - 943px


