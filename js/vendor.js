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
});

var presentSlide=Reveal.getCurrentSlide();

Reveal.addEventListener('slide-two', ()=>{
    console.log('hey');
    document.querySelector('.audio-two').play();
  });