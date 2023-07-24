
const tempoMusica = document.getElementById('tempo-musica');
const tempoMusicaDuracao = document.getElementById('tempo-musica-duracao');



audio.addEventListener("timeupdate", function() {
    let s = parseInt(audio.currentTime % 60);
    let m = parseInt((audio.currentTime / 60) % 60);
    let sd = parseInt(audio.duration % 60);
    let md = parseInt((audio.duration / 60) % 60);

    if(s < 10) {
        s = '0' + s
    }
    if(sd < 10) {
        sd = '0' + s
    }

     tempoMusica.innerHTML = `${m}:${s}` ;
     if(audio.paused && audio.currentTime == 0) return tempoMusicaDuracao.innerHTML = '0:00'
     tempoMusicaDuracao.innerHTML = `${md}:${sd}` ;

}, false);


// function loopFunction(delay, callback){
//     var loop = function(){
//         callback();
//         setTimeout(loop, delay);
//     }; loop();
// };

// loopFunction(200, currentTime);


