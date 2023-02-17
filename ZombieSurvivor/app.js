// Global 
const start = document.getElementById("start")
const mob = document.getElementById("mob");
const human = document.getElementById("human");
const scoreBox = document.getElementById("scoreBox");
let score = 0;
const runaway = () => {human.style.visibility= "hidden";};

const humanRun = setTimeout(runaway,3000);


// Intro

start.addEventListener("click",()=>{
    playerName();
    mob.style.visibility="visible";
    scoreBox.style.visibility="visible";
    
    score.innerHTML= "Score : " & score
    
    
});

let playerName =() => {
    
    let name= prompt("Please tell us your name, so we can prepare the tombstone.");
    localStorage.setItem(name,score);
    start.style.visibility ="hidden";

};

// Kill Zombie

mob.addEventListener("click",()=>{ 
    newZombie();
    score ++;
    scoreBox.innerHTML= "Score : " + score;
});

// Random Formula

const randomNumber = (num) => {
    return Math.floor((Math.random()*1000)+1);
};

// console.log(randomNumber);

const newZombie = () => {
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;
    mob.style.top=randomNumber(currentWidth)+"px";
    mob.style.left=randomNumber(currentHeight)+"px";
    document.body.appendChild(mob);
    human.style.visibility="visible";
    newHuman();
};

// Save human

human.addEventListener("click",()=>{ 
    newHuman();
    runaway();
    score -= 1;
    scoreBox.innerHTML="Score : " + score;
})



const newHuman = () => {
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;
    human.style.top=randomNumber(currentWidth)+"px";
    human.style.left=randomNumber(currentHeight)+"px";
    document.body.appendChild(human);

};

