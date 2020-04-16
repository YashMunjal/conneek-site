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
    transition: 'zoom',
    controlsBackArrows: 'visible'
});
const idleAudio=document.querySelector('.main-audio');
const muteBtn=document.querySelector('.slide-one-mute');
muteBtn.addEventListener('click',()=>{
    muteBtn.classList.toggle('active');
    if(muteBtn.classList.contains('active'))
    {
        idleAudio.play();
    }
    else if(muteBtn.classList.value==='slide-one-mute')
    {
        idleAudio.pause();
    }
    
    idleAudio.loop=true;
});




  

