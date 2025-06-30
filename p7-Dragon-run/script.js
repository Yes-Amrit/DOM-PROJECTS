
score = 0
cross = true;

audio = new Audio('ringtone.mp3')
audioGo = new Audio('gameover.mp3')

setTimeout(()=>{
    audio.play();
},100)

document.onkeydown = function(e){
    console.log("Key code is:", e.keyCode)
    if(e.keyCode==38 || e.keyCode==32){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        },700);
    }
    if(e.keyCode==39){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinoX + 130 + "px";
    }
    if(e.keyCode==37){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinoX - 130 + "px";
    }
}

setInterval(()=>{
    dino = document.querySelector('.dino')
    obstacle = document.querySelector('.obstacle')
    gameOver= document.querySelector('.gameOver')

    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsety = Math.abs(dy-oy);

    if(offsetX<80 && offsety<92){
        gameOver.innerHTML = "Game Over"
        obstacle.classList.remove('obstacleAni')
        audioGo.play();
        setTimeout(()=>{
            audio.pause();
            audioGo.pause();
        },1500)
        
    }
    else if(cross && offsetX<145){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(()=>{
            cross = true;
        },1000)
        setTimeout(()=>{
            aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('aniamtion-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration=newDur + 's';
        },500)


        
    }

},10) 

function updateScore(scoreValue){
    let scoreCont = document.getElementById('scoreCont');
    scoreCont.innerHTML = "Your Score: " + scoreValue;
}
