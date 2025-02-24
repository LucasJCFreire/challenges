document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLocaleLowerCase())
})

document.querySelector('.compositor button').addEventListener('click', () => {
    let song = document.querySelector('#input').value

    if(song !== ""){
        let songArray = song.split("")
        playComposition(songArray)
    }
})

function playSound(sound){
    let audioElement = document.querySelector(`#s${sound}`)
    let keyElement = document.querySelector(`div[data-teclas="${sound}"]`)


    if(audioElement){
        audioElement.currentTime = 0
        audioElement.play()
    }

    if(keyElement){
        keyElement.classList.add('ativado')
        setTimeout(() => {
            keyElement.classList.remove('ativado')
        }, 300);
    }
}

function playComposition(songArray) {
    let wait = 0

    for(let songItem of songArray){
        setTimeout(() => {
            playSound(`key${songItem}`)
        }, wait)
        wait += 250;    
    }
}