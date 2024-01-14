var meuAudio = new Audio();


meuAudio.src = 'http://127.0.0.1:5500/jumpscare/grito.mp3';




function carrego()  {
    meuAudio.play();
    elem.webkitRequestFullscreen();
}



