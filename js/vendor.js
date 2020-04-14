Reveal.initialize({
    controls: true,
    controlsTutorial: true,
    mouseWheel: true,
    width: "100%",
    height: "100%",
    margin: 0,
    minScale: 1,
    maxScale: 1,
    hash:true
});


document.querySelector('#start-journey').addEventListener('click',()=>{
    Reveal.next();
    console.log('clicked');
});