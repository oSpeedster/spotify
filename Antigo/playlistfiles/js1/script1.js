
// ===================================================================

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("perfilMenu1").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.perfil')) {
      var dropdowns = document.getElementsByClassName("perfilContent");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


// ===================================================================

const searchboxTab1 = document.getElementById('searchbox-tab1')

function searchBoxTab1() {
    if(searchboxTab1.style.display == "none" || searchboxTab1.style.display == '') {
        searchboxTab1.style.display = "block";
    } else {
        searchboxTab1.style.display = "none";
    }
}



// ===================================================================

const audio1 = document.getElementById('audio1');

let playbotao1 = "https://cdn-icons-png.flaticon.com/512/27/27223.png"
let playicon1 = document.getElementById('playicon1');

function botaomidia1() {
if(audio1.paused) {
    audio1.play()
    playicon1.src = "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-pause-512.png"
} else {
    audio1.pause()
    playicon1.src = "https://cdn-icons-png.flaticon.com/512/27/27223.png"
}
}

function botaomidia21() {
    if(audio1.paused) {
        playicon1.src = "https://cdn-icons-png.flaticon.com/512/27/27223.png"
    } else {
        playicon1.src = "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-pause-512.png"
    }
    }

function loopFunction1(delay, callback){
    var loop = function(){
        callback();
        setTimeout(loop, delay);
    }; loop();
};

loopFunction1(200, botaomidia21)

function botaovoltar1() {
    if(audio1.currentTime = 0) {
        return
    } else {
        audio1.currentTime(0)
    }
}

function botaoavancar1() {
    if(audio1.currentTime = audio1.duration) {
        return
    } else {
        audio1.currentTime(audio1.duration)
    }
}

function botaoloop1() {
    if(audio1.loop === false) {
        audio1.loop = true
    } else {
        audio1.loop = false
    }
}




// ===================================================================

const saveicon1 = document.getElementById('saveicon1')

function saveIcon1() {
    if(saveicon1.src == 'https://cdn-icons-png.flaticon.com/512/777/777088.png') {
        saveicon1.src = 'https://cdn-icons-png.flaticon.com/256/1077/1077035.png'
    } else {
        saveicon1.src = 'https://cdn-icons-png.flaticon.com/512/777/777088.png'
    }
}

// ===================================================================