// Global 
const start = document.getElementById("start")
const mob = document.getElementById("mob");
const human = document.getElementById("human");
const scoreBox = document.getElementById("scoreBox");
let score = 0;
const runaway = () => {human.style.visibility= "hidden";};
const player = document.getElementById("player");



// Intro

start.addEventListener("click",()=>{
    alert("Click on the zombies to kill them, avoid clicking on the baby! For each zombie killed, you will get 1 point and for each baby you click, you lose 1 point. Get 10 points to win.")
    start.style.visibility ="hidden";
    mob.style.visibility="visible";
    scoreBox.style.visibility="visible";    
    score.innerHTML= "Score : " & score
 
});


// Kill Zombie

mob.addEventListener("click",()=>{ 
    newZombie();
    score ++;
    scoreBox.innerHTML= "Score : " + score;
    if(score>= 10) {
        let name= prompt("Please tell us your name");  
        scoreBox.innerHTML= name + " win !!!";
        mob.style.visibility="hidden";
        // Level2();
    };
});

// Random Formula

const randomNumber = (num) => {
    return Math.floor((Math.random()*400)+1);
};

// console.log(randomNumber);

const newZombie = () => {
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;
    mob.style.top=randomNumber()+"px" ;
    mob.style.left=randomNumber()+"px";
    document.body.appendChild(mob);
    human.style.visibility="visible";
    newHuman();
    
};

// A wild human appears

human.addEventListener("click",()=>{ 
    newHuman();
    runaway();
    score -= 1;
    scoreBox.innerHTML="Score : " + score;
})



const newHuman = () => {
    const humanRun = setTimeout(runaway,3000);
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;
    human.style.top=randomNumber()+"px" ;
    human.style.left=randomNumber()+"px";
    document.body.appendChild(human);

};

// Level 2

const Level2 = () => {
document.body.removeChild(mob);
document.body.removeChild(human);
player.style.visibility="visible";
};


console.log(player);

//Move player

player.addEventListener("keydown",(event)=>{
    let playerY = parseInt(player.style.top);
    let playerX = parseInt(player.style.left);
    switch (event.key){
        case("ArrowDown"):
        playerY += 10;
        player.style.top = playerY + "px"
        break;
        case("ArrowUp"):
        playerY -= 10;
        player.style.top = playerY + "px"
        break;
        case("ArrowLeft"):
        playerX += 10;
        player.style.left = playerX + "px"
        break;
        case("ArrowRight"):
        playerX -= 10;
        player.style.left = playerX + "px"
        break;            
    }
});

