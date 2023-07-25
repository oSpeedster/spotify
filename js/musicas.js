
const cantorMusica = document.getElementById('cantormusica');
const nomeMusica = document.getElementById('nomemusica');
const iconeMusica = document.getElementById('iconebarra');

// ------ MUSICAS ------ // 

let numeroTotal = 7

let musica1 = {
    nomeMusica: 'Plutão',
    nomeArtista: 'VMZ',
    linkMusica: './assets/Plutão_Alw_AUN9XNQ.mp3',
    imgMusica: './assets/imgs/plutaoicon.jpg',
    duracao: '3:41',
    posicao: '1'
}

let musica2 = {
    nomeMusica: 'Annihilate',
    // Annihilate (Spider-Man: Across the Spider-Verse)
    nomeArtista: 'Metro Boomin',
    // Metro Boomin, Swae Lee, Lil Wayne, Offset
    linkMusica: './assets/Annihilate_eFV2QHqiUww.mp3',
    imgMusica: './assets/imgs/annihilateicon.jpg',
    duracao: '3:51',
    posicao: '2'
}

let musica3 = {
    nomeMusica: 'Sunflower',
    nomeArtista: 'Post Malone',
    linkMusica: './assets/Sunflower_r7Rn4ryE_w8.mp3',
    imgMusica: './assets/imgs/sunflowericon.jpg',
    duracao: '2:38',
    posicao: '3'
    
}

let musica4 = {
    nomeMusica: 'I Ain’t Worried',
    nomeArtista: 'One Republic',
    linkMusica: './assets/I Ain’t Worried_W97Sv-SHnDU.mp3',
    imgMusica: './assets/imgs/iaintworriedicon.jpg',
    duracao: '2:27',
    posicao: '4'
    
}

let musica5 = {
    nomeMusica: 'Nothing Else Matters',
    nomeArtista: 'Metallica',
    linkMusica: './assets/Nothing Else Matters_ozXZnwYTMbs.mp3',
    imgMusica: './assets/imgs/nothingelsematters.jpg',
    duracao: '6:28',
    posicao: '5'
    
}

let musica6 = {
    nomeMusica: 'Creep (Acoustic)',
    nomeArtista: 'Radiohead',
    linkMusica: './assets/Creep (Acoustic)_4BX5xpB2DBM.mp3',
    imgMusica: './assets/imgs/ceepicon.jpg',
    duracao: '4:18',
    posicao: '6'
    
}

let musica7 = {
    nomeMusica: 'Calling',
    nomeArtista: 'Metro Boomin',
    linkMusica: './assets/Calling_iWDxMpLvaUE.mp3',
    imgMusica: './assets/imgs/callingicon.jpg',
    duracao: '3:40',
    posicao: '7'
    
}
// ------ MUSICAS ------ // 

// ------ SCRIPT PL ------ // 

function scriptPl(musica) {
    let musicapl = document.getElementById(`musica${musica.posicao}`);
    let icone = document.getElementById(`iconepl${musica.posicao}`)
    let nome = document.getElementById(`nome${musica.posicao}`)
    let artista = document.getElementById(`artista${musica.posicao}`)
    let duracao = document.getElementById(`duracao${musica.posicao}`)
    let posicao = document.getElementById(`posicao${musica.posicao}`)

    icone.src = musica.imgMusica;
    nome.innerHTML = musica.nomeMusica;
    artista.innerHTML = musica.nomeArtista;
    duracao.innerHTML = musica.duracao
    posicao.innerHTML = musica.posicao;

    let variavel = eval(`musica${parseInt(musica.posicao) + 1}`)

    numeroTotal = (parseInt(musica.posicao) + 1);
    document.querySelector('.txtplh3').innerHTML = `\n<div class="perfilplh">A</div>\nnomePerfil • ${numeroTotal} músicas\n`

    if(variavel != "undefined") {
        scriptPl(variavel)
    } else {
        console.log('nao existe')
        return
    }
}




// ------ SCRIPT PL ------ // 

function musicaTocar(musica) {
    audio.src = musica.linkMusica
    iconeMusica.src = musica.imgMusica
    nomeMusica.innerHTML = musica.nomeMusica
    cantorMusica.innerHTML = musica.nomeArtista

    audio.play()
    
    if(nomeMusica.clientWidth > 57) {
        nomeMusica.style.MozTransform = "translateX(100%)"
        nomeMusica.style.WebkitTransform = "translateX(100%)"
        nomeMusica.style.transform = "translateX(100%)"
    
        nomeMusica.style.MozAnimation = "my-animation 8s linear infinite"
        nomeMusica.style.WebkitAnimation = "my-animation 8s linear infinite"
        nomeMusica.style.animation = "my-animation 8s linear infinite"

        nomeMusica.style.width = "250px"
    
    } else {
        // nomeMusica.style.MozTransform = ""
        // nomeMusica.style.WebkitTransform = ""
        // nomeMusica.style.transform = ""
    
        // nomeMusica.style.MozAnimation = ""
        // nomeMusica.style.WebkitAnimation = ""
        // nomeMusica.style.animation = ""

        // nomeMusica.style.width = "80px"

    }
    
    if(cantorMusica.clientWidth > 57) {
        cantorMusica.style.MozTransform = "translateX(100%)"
        cantorMusica.style.WebkitTransform = "translateX(100%)"
        cantorMusica.style.transform = "translateX(100%)"
    
        cantorMusica.style.MozAnimation = "my-animation 8s linear infinite"
        cantorMusica.style.WebkitAnimation = "my-animation 8s linear infinite"
        cantorMusica.style.animation = "my-animation 8s linear infinite"

        cantorMusica.style.width = "250px"
    } else {
        // cantorMusica.style.MozTransform = ""
        // cantorMusica.style.WebkitTransform = ""
        // cantorMusica.style.transform = ""
    
        // cantorMusica.style.MozAnimation = ""
        // cantorMusica.style.WebkitAnimation = ""
        // cantorMusica.style.animation = ""

        // cantorMusica.style.width = "80px"
    }
}


function playlistTocar(musica) {

    audio.src = musica.linkMusica
    iconeMusica.src = musica.imgMusica
    nomeMusica.innerHTML = musica.nomeMusica
    cantorMusica.innerHTML = musica.nomeArtista

    audio.play()

    function musicaAcabar() {
        if(audio.currentTime == audio.duration) {
            try {
            playlistTocar(eval(`musica${parseInt(musica.posicao) + 1}`))
            } catch(err) {
                musicaTocar(musica1)
                audio.play()
                audio.pause()
            }
        }
    }

    function loopFunction(delay, callback){
        var loop = function(){
            callback();
            setTimeout(loop, delay);
        }; loop();
    };
    
    loopFunction(1, musicaAcabar);

}

function playlistAleatorio() {

    let numeroMusica = Math.floor(Math.random() * numeroTotal);

    if(numeroMusica == 0) numeroMusica = 1;

    let aMusica = eval(`musica${numeroMusica}`)

    aleatorioTocar(aMusica);

    let musicaTocando = aMusica

    function aleatorioTocar(musica) {

        audio.src = musica.linkMusica
        iconeMusica.src = musica.imgMusica
        nomeMusica.innerHTML = musica.nomeMusica
        cantorMusica.innerHTML = musica.nomeArtista
    

        audio.play()
    
        function aleatorioAcabar() {
            if(audio.currentTime == audio.duration) {
                let numeroMusica2 = Math.floor(Math.random() * numeroTotal);
                if(numeroMusica2 == 0) numeroMusica2 = 1;

                aMusica = eval(`musica${numeroMusica2}`)


                if(musicaTocando == aMusica) {
                    aMusica = eval(`musica${numeroMusica2 + 1}`)
                }

                musicaTocar(aMusica)
                musicaTocando = aMusica

            }
        }
    
        function loopFunction(delay, callback){
            var loop = function(){
                callback();
                setTimeout(loop, delay);
            }; loop();
        };
        
        loopFunction(1, aleatorioAcabar);

    }


}

const progressb = document.getElementById('progressb');
const progressbar = document.getElementById('progress-bar');


function updateProgressBar() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const progressBar = document.getElementById('progressprogress');
    let progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    progressb.style.left = `${((progressPercent * 3.6) + 367)}px`;
    
    const audiorange = document.querySelector('.audiorange')

    audiorange.value = progressPercent;

    // 0 = 367
    // 50 = 547
    // 100 = 727
    // 0 = 367; 50 = 547 ;100 = 727;
    // ((porcento) * 3.6 + 367)

    // ((((audio.currentTime / audio.duration) * 100) * 3.7) + 367)
    // ((audio.currentTime / audio.duration) * 100)
    // ((audio.currentTime / audio.duration) * 100)

}

audio.addEventListener('timeupdate', updateProgressBar);

let audiorange = document.querySelector('.audiorange')


audiorange.addEventListener("change", function() {
    audio.currentTime = (audio.duration  * (parseFloat(document.querySelector('.audiorange').value) / 100))
    if(estavaTocando == true) { 
        audio.play()
        estavaTocando = false
    }
}, false);

audiorange.addEventListener("input", function() {
    if(!audio.paused) {
        audio.pause()
        estavaTocando = true
    }

}, false);

audiorange.addEventListener("input", function() {
    audio.currentTime = (audio.duration  * (parseFloat(document.querySelector('.audiorange').value) / 100))
}, false);




    //let mudarAudio = (audio.currentTime = (audio.duration  * (parseFloat(document.getElementById('progressprogress').style.width) / 100)))

  function testeProgress() {
    
    const progressBar = document.getElementById('progressprogress');
    let progressPercent = (audio.currentTime / audio.duration) * 100;

    if(progressb.style.left == '') {
        progressb.style.left = `${(parseInt((((audio.currentTime / audio.duration) * 100) * 3.6) + 367))}px`
    }

    if(parseInt(progressb.style.left) !== (parseInt((((audio.currentTime / audio.duration) * 100) * 3.6) + 367))) {
        progressBar.style.width = `${(progressb.offsetLeft / 3.65) - 100}%`
        //mudarAudio
    }




//progressb.style.left = `${(((currentTime / duration) * 100 * 3.6) + 367)}px`;
//progressPercent = `${(((parseInt(progressb.style.left) * 100) / 3.6) - 367)}px`;
    

    //0   =  0  = 367
    //50  = 185 = 547
    //100 = 370 = 727

    // 000 + 367 = 367 - 367 = 0
    // 185 + 367 = 552 - 547 = 5
    // 370 + 367 = 737 - 727 = 10


    //() / 3.7 = porcentagem
    //porcentagem * 3.7 = ()

  }

  function loopFunction(delay, callback){
    var loop = function(){
        callback();
        setTimeout(loop, delay);
    }; loop();
};

loopFunction(1, testeProgress);

