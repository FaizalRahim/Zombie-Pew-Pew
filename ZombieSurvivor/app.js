// Global const
const mob = document.getElementById("mob");
const human = document.getElementById("human");
human.attributes

// Kill Zombie

mob.addEventListener("click",()=>{ 
    newZombie();
    human.style.visibility="visible";
})

// Random Formula

const randomNumber = (num) => {
    return Math.floor((Math.random()*1000)+1);
}

console.log(randomNumber);

const newZombie = () => {
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;
    mob.style.top=randomNumber(currentWidth)+"px";
    mob.style.left=randomNumber(currentHeight)+"px";
    document.body.appendChild(mob);
}

// Save human

human.addEventListener("click",()=>{ 
    newHuman();
})


const newHuman = () => {
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;
    human.style.top=randomNumber(currentWidth)+"px";
    human.style.left=randomNumber(currentHeight)+"px";
    document.body.appendChild(human);
}