
const cantorMusica = document.getElementById('cantormusica1');
const nomeMusica = document.getElementById('nomemusica1');
const iconeMusica = document.getElementById('iconebarra1');

// ------ MUSICAS ------ // 

let musica1 = {
    nomeMusica: 'Plutão',
    nomeArtista: 'VMZ',
    linkMusica: './assets/Plutão_Alw_AUN9XNQ.mp3',
    imgMusica: 'https://i.scdn.co/image/ab67616d0000b273c88177b85ee246a6ea5125a4',
    duracao: '3:41',
    posicao: '1'
}

let musica2 = {
    nomeMusica: 'Annihilate',
    // Annihilate (Spider-Man: Across the Spider-Verse)
    nomeArtista: 'Metro Boomin',
    // Metro Boomin, Swae Lee, Lil Wayne, Offset
    linkMusica: './assets/Annihilate_eFV2QHqiUww.mp3',
    imgMusica: 'https://i.scdn.co/image/ab67616d0000b2736ed9aef791159496b286179f',
    duracao: '3:51',
    posicao: '2'
}

let musica3 = {
    nomeMusica: 'Sunflower',
    nomeArtista: 'Post Malone',
    linkMusica: './assets/Sunflower_r7Rn4ryE_w8.mp3',
    imgMusica: 'https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f',
    duracao: '2:38',
    posicao: '3'
    
}

let musica4 = {
    nomeMusica: 'I Ain’t Worried',
    nomeArtista: 'One Republic',
    linkMusica: './assets/I Ain’t Worried_W97Sv-SHnDU.mp3',
    imgMusica: 'https://i.scdn.co/image/ab67616d0000b273ec96e006b8bdfc582610ec13',
    duracao: '2:27',
    posicao: '4'
    
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

    if(variavel != "undefined") {
        scriptPl(variavel)
    } else {
        console.log('nao existe')
        return
    }
}




// ------ SCRIPT PL ------ // 

function musicaTocar(musica) {
    audio1.src = musica.linkMusica
    iconeMusica.src = musica.imgMusica
    nomeMusica.innerHTML = musica.nomeMusica
    cantorMusica.innerHTML = musica.nomeArtista

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


//const progressb1 = document.getElementById('progressb1');


function updateProgressBar1() {
    const currentTime1 = audio1.currentTime;
    const duration1 = audio1.duration;
    const progressBar1 = document.getElementById('progressprogress1');
    let progressPercent1 = (currentTime1 / duration1) * 100;
    progressBar1.style.width = `${progressPercent1}%`;
    progressb1.style.left = `${((progressPercent1 * 3.6) + 367)}px`;
    

    // 0 = 367
    // 50 = 547
    // 100 = 727
    // 0 = 367; 50 = 547 ;100 = 727;
    // ((porcento) * 3.6 + 367)

    // ((((audio1.currentTime / audio1.duration) * 100) * 3.7) + 367)
    // ((audio1.currentTime / audio1.duration) * 100)
    // ((audio1.currentTime / audio1.duration) * 100)

}

  audio1.addEventListener('timeupdate', updateProgressBar1);
  
    //let mudarAudio1 = (audio1.currentTime = (audio1.duration  * (parseFloat(document.getElementById('progressprogress1').style.width) / 100)))

  function testeProgress1() {
    
    const progressBar1 = document.getElementById('progressprogress1');
    let progressPercent1 = (audio1.currentTime / audio1.duration) * 100;

    if(progressb1.style.left == '') {
        progressb1.style.left = `${(parseInt((((audio1.currentTime / audio1.duration) * 100) * 3.6) + 367))}px`
    }

    if(parseInt(progressb1.style.left) !== (parseInt((((audio1.currentTime / audio1.duration) * 100) * 3.6) + 367))) {
        progressBar1.style.width = `${(progressb1.offsetLeft / 3.65) - 100}%`
        //mudarAudio1
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

loopFunction(1, testeProgress1);


