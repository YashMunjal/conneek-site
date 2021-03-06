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
    autoSlide: 5000,
    autoSlideStoppable: false,
    controlsBackArrows: 'visible',
    backgroundTransition: 'concave',
    viewDistance: 1
});

//Constants

const idleAudio=document.querySelector('.main-audio');
const muteBtn=document.querySelector('.slide-one-mute');
//Other codes

//Ready function
Reveal.addEventListener( 'ready', function( event ) {
    muteBtn.children[0].display='none';
    muteBtn.children[1].display='block';
} );


//Component functions
muteBtn.addEventListener('click',()=>{
    muteBtn.classList.toggle('active');
    
    if(muteBtn.classList.contains('active'))
    {
        muteBtn.children[1].style.display='none';
        muteBtn.children[0].style.display='block';
        //console.log(muteBtn.children[1])
        idleAudio.play();
    }
    else if(muteBtn.classList.value==='slide-one-mute')
    {
        muteBtn.children[0].style.display='none';
        muteBtn.children[1].style.display='block';
        idleAudio.pause();
    }
    
    idleAudio.loop=true;
});

Reveal.addEventListener( 'slidechanged', function( e ) {
    if(e.currentSlide.classList.contains('slide-six'))
    {
        window.location.href = '/pages/home.html';
    }
} );

