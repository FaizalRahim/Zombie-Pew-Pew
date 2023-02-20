// Global 
const start = document.getElementById("start")
const mob = document.getElementById("mob");
const human = document.getElementById("human");

// Game variables
const playerScore= document.getElementById("playerScore");
const hp = document.getElementById("hp");
let playerhp = 15;
const runaway = () => {
    human.style.visibility= "hidden";

};
const attack = () => {
    mob.style.visibility= "hidden";
    playerhp --;
    hp.innerHTML= "HP : " + playerhp;
};
const player = document.getElementById("player");
let score = 0;
const bullet = document.getElementById("bullets")
let bullets = 15;


// Intro

start.addEventListener("click",()=>{
    alert("Click on the zombies to kill them, avoid clicking on the baby! For each zombie killed, you will get 1 point and for each baby you click, you lose 1 point. Get 10 points to win.")
    start.innerHTML ="Restart Game";
    mob.style.visibility="visible";
    human.style.visibility="visible";
    scoreBox.style.visibility="visible";
    score = 0;
    bullets = 15;
    bullets ++;


});


// Random Formula

const randomNumber = (num) => {
    return Math.floor((Math.random()*400)+1);
};

// console.log(randomNumber);



// Kill Zombie

mob.addEventListener("click",()=>{ 
    score ++;
    playerScore.innerHTML= "Score : " + score;
});

const newZombie = () => {
    mob.style.visibility= "visible";
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;
    mob.style.top=randomNumber()+"px" ;
    mob.style.left=randomNumber()+"px";
    // document.body.appendChild(mob);
    // const zombieAttack = setTimeout(attack,3000);
};

// A wild human appears

human.addEventListener("click",()=>{ 
    score --;
    playerScore.innerHTML="Score : " + score;
})


const newHuman = () => {
    human.style.visibility= "visible";
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;
    human.style.top=randomNumber()+"px" ;
    human.style.left=randomNumber()+"px";
    // document.body.appendChild(human);
    // const humanRun = setTimeout(runaway,3000);

};

setInterval(newZombie,5000);
setInterval(newHuman,1500);

// Dont randomly click

document.addEventListener("click",()=>{ 

    bullets --;
    bullet.innerHTML= "Bullets : " + bullets;
    if(bullets>0 && score>= 10) {
        let name= prompt("Please tell us your name");  
        scoreBox.innerHTML= name + " survived !!!";
        // Level2();
    }else if (bullets<1){
        let name= prompt("Please tell us your name");  
        scoreBox.innerHTML= name + " became lunch !!!";

    }
});



// Level 2

// const Level2 = () => {
// document.body.removeChild(mob);
// document.body.removeChild(human);
// player.style.visibility="visible";
// };


// console.log(player);

// //Move player

// move =() => {
// document.addEventListener("keydown",(event)=>{
//     switch (event.key){
//         case("ArrowDown"):
//         player.style.top += 100+ "px"
//         break;
//         case("ArrowUp"):
//         player.style.top -= 100 + "px"
//         break;
//         case("ArrowLeft"):
//         player.style.left -= 100 + "px"
//         break;
//         case("ArrowRight"):
//         player.style.left += 100 + "px"
//         break;            
//     } 
// });
// };

// document.addEventListener("keydown",move());
