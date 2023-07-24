
const tempoMusica1 = document.getElementById('tempo-musica1');
const tempoMusicaDuracao1 = document.getElementById('tempo-musica-duracao1');



audio1.addEventListener("timeupdate", function() {
    let s = parseInt(audio1.currentTime % 60);
    let m = parseInt((audio1.currentTime / 60) % 60);
    let sd = parseInt(audio1.duration % 60);
    let md = parseInt((audio1.duration / 60) % 60);

    if(s < 10) {
        s = '0' + s
    }
    if(sd < 10) {
        sd = '0' + s
    }

    tempoMusica1.innerHTML = `${m}:${s}` ;
    tempoMusicaDuracao1.innerHTML = `${md}:${sd}` ;
}, false);


// function loopFunction(delay, callback){
//     var loop = function(){
//         callback();
//         setTimeout(loop, delay);
//     }; loop();
// };

// loopFunction(200, currentTime);


