// Global const
const start = document.getElementById("start")
const mob = document.getElementById("mob");
const human = document.getElementById("human");
human.attributes

// Intro

start.addEventListener("click",()=>{
    playerName();
    mob.style.visibility="visible";
    
});

let playerName =() => {
    let score = 0;
    prompt("Please tell us your name, so we can prepare the tombstone.");
    localStorage.setItem(playerName,score);
    start.style.visibility ="hidden";

};

// Kill Zombie

mob.addEventListener("click",()=>{ 
    newZombie();
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
    setInterval(runaway(),3000)
})

const runaway = () => {
    human.style.visibility="hidden";
    };

const newHuman = () => {
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;
    human.style.top=randomNumber(currentWidth)+"px";
    human.style.left=randomNumber(currentHeight)+"px";
    document.body.appendChild(human);
    
};

