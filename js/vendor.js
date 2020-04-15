Reveal.initialize({
    controls: true,
    controlsTutorial: true,
    mouseWheel: true,
    center:true,
    width: "100%",
    height: "100%",
    margin: 0,
    minScale: 1,
    maxScale: 1,
    hash:true,
    autoSlide: 15000,
    autoSlideStoppable: false,
    transition: 'zoom'
});

var idleAudio=document.querySelector('.main');

Reveal.addEventListener( 'ready', function( event ) {
    //idleAudio.play();
    idleAudio.loop=true;
} );
  

