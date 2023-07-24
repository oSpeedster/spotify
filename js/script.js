
const d = new Date();
const textotela = document.getElementById('textotela')

function verificarHorario() {
    if(d.getHours() >= 12 && d.getHours() < 18) {
        textotela.innerHTML = 'Boa Tarde!'
    }
    if(d.getHours() >= 18 && d.getHours() <= 23) {
        textotela.innerHTML = 'Boa Noite!'
    }
    if(d.getHours() >= 0 && d.getHours() < 6) {
        textotela.innerHTML = 'Boa Madrugada!'
    }
    if(d.getHours() >= 6 && d.getHours() < 12) {
        textotela.innerHTML = 'Bom Dia!'
    }
}
verificarHorario();

// ===================================================================

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("perfilMenu").classList.toggle("show");
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

const searchboxTab = document.getElementById('searchbox-tab')

function searchBoxTab() {
    if(searchboxTab.style.display == "none" || searchboxTab.style.display == '') {
        searchboxTab.style.display = "block";
    } else {
        searchboxTab.style.display = "none";
    }
}



// ===================================================================

const audio = document.getElementById('audio');

let playbotao = "./assets/imgs/playicon.png"
let playicon = document.getElementById('playicon');

function botaomidia() {
if(audio.paused) {
    audio.play()
    playicon.src = "./assets/imgs/pauseicon.png"
} else {
    audio.pause()
    playicon.src = "./assets/imgs/playicon.png"
}
}

function botaomidia2() {
    if(audio.paused) {
        playicon.src = "./assets/imgs/playicon.png"
    } else {
        playicon.src = "./assets/imgs/pauseicon.png"
    }
    }

function loopFunction(delay, callback){
    var loop = function(){
        callback();
        setTimeout(loop, delay);
    }; loop();
};

loopFunction(200, botaomidia2)

function botaovoltar() {
    if(audio.currentTime = 0) {
        return
    } else {
        audio.currentTime(0)
    }
}

function botaoavancar() {
    if(audio.currentTime = audio.duration) {
        return
    } else {
        audio.currentTime(audio.duration)
    }
}

function botaoloop() {
    if(audio.loop === false) {
        audio.loop = true
    } else {
        audio.loop = false
    }
}




// ===================================================================

const saveicon = document.getElementById('saveicon')

function saveIcon() {
    if(saveicon.src == './assets/imgs/saveicon2.png') {
        saveicon.src = './assets/imgs/saveicon.png'
    } else {
        saveicon.src = './assets/imgs/saveicon2.png'
    }
}

// ===================================================================

let menumobile = document.getElementById('menu-mobile');
let menumobile2 = document.getElementById('menu-mobile2');
let menumobileopen = document.getElementById('menu-mobile-open');

let menumobileopenDisplay = menumobileopen.style.display
let menumobileDisplay = menumobile.style.display
let menumobile2Display = menumobile2.style.display

function menuMobileOpen() {
    menumobileopen.style.display = 'block'
    menumobile.style.display = 'none'
    menumobile2.style.display = 'block'    
}

function menuMobileClose() {
    menumobileopen.style.display = 'none'
    menumobile.style.display = 'block'
    menumobile2.style.display = 'none'    
}


// ===================================================================
