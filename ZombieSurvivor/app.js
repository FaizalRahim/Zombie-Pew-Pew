// Global 
const start = document.getElementById("start")
const mob = document.getElementById("mob");
const mob2 = document.getElementById("mob2");
const mob3 = document.getElementById("mob3");
const mob4 = document.getElementById("mob4");
const cat = document.getElementById("cat");
const owl = document.getElementById("owl");
const snake = document.getElementById("snake");
const sheep = document.getElementById("sheep");
const playerScore= document.getElementById("playerScore");
const bullet = document.getElementById("bullets");
const lv = document.getElementById("lv");

// Game variables

let score = 0;
let bullets = 15;
let level = 1;
let goal = 10;
let mobSpawn = 1600;
let mob2Spawn = 1000;
let mob3Spawn = 750;
let mob4Spawn = 500;
let catSpawn = 1500;
let owlSpawn = 900;
let snakeSpawn = 650;
let sheepSpawn = 400;




// Intro

start.addEventListener("click",()=>{
    alert("Click on the zombies to kill them, avoid clicking on the wildlife! For each zombie killed, you will get points and for each wildlife you click, you lose points. Get 10 points to proceed to next level. Do remeber not to waste bullets, or else you will end up as lunch.")
    score = 0;
    bullets = 16;
    level =1;
    start.innerHTML ="Restart Game";
    lv.innerHTML = "Level: "+ level;
    playerScore.innerHTML="Score : " + score;
    scoreBox.style.visibility="visible";

});


// Random Formula

const randomNumber = (num) => {
    return Math.floor((Math.random()*800)+1);
};

// console.log(randomNumber);

// Generate npcs
const newZombie = () => {
    mob.style.visibility= "visible";
    mob.style.top=randomNumber()+"px" ;
    mob.style.left=randomNumber()+"px";

};

const newZombie2 = () => {
    if(level >=5){
    mob2.style.visibility= "visible";
    mob2.style.top=randomNumber()+"px" ;
    mob2.style.left=randomNumber()+"px";
    }

};

const newZombie3 = () => {
    if(level>=10){
    mob3.style.visibility= "visible";
    mob3.style.top=randomNumber()+"px" ;
    mob3.style.left=randomNumber()+"px";
    }
};

const newZombie4 = () => {
    if(level>=13){
    mob4.style.visibility= "visible";
    mob4.style.top=randomNumber()+"px" ;
    mob4.style.left=randomNumber()+"px";
    }
};

const newCat = () => {
    cat.style.visibility= "visible";
    cat.style.top=randomNumber()+"px" ;
    cat.style.left=randomNumber()+"px";

};

const newOwl = () => {
    if(level >=5){
    owl.style.visibility= "visible";
    owl.style.top=randomNumber()+"px" ;
    owl.style.left=randomNumber()+"px";
    }
};

const newSnake = () => {
    if(level >=10){
    snake.style.visibility= "visible";
    snake.style.top=randomNumber()+"px" ;
    snake.style.left=randomNumber()+"px";
    }
};

const newSheep = () => {
    if(level >=13){
    sheep.style.visibility= "visible";
    sheep.style.top=randomNumber()+"px" ;
    sheep.style.left=randomNumber()+"px";
    }
};


// Spawn rate
setInterval(newZombie,mobSpawn);
setInterval(newZombie2,mob2Spawn);
setInterval(newZombie3,mob3Spawn);
setInterval(newZombie4,mob4Spawn);
setInterval(newCat,catSpawn);
setInterval(newOwl,owlSpawn);
setInterval(newSnake,snakeSpawn);
setInterval(newSheep,sheepSpawn);

// Kill Zombie

mob.addEventListener("click",()=>{ 
    score ++;
    playerScore.innerHTML= "Score : " + score;
});

mob2.addEventListener("click",()=>{ 
    score +=2;
    playerScore.innerHTML= "Score : " + score;
});

mob3.addEventListener("click",()=>{ 
    score +=3;
    playerScore.innerHTML= "Score : " + score;
});

mob4.addEventListener("click",()=>{ 
    score +=5;
    playerScore.innerHTML= "Score : " + score;
});

// Wild Life appears

cat.addEventListener("click",()=>{ 
    score --;
    playerScore.innerHTML="Score : " + score;
})

owl.addEventListener("click",()=>{ 
    score -=2;
    playerScore.innerHTML="Score : " + score;
})

snake.addEventListener("click",()=>{ 
    score -=3;
    playerScore.innerHTML="Score : " + score;
})

sheep.addEventListener("click",()=>{ 
    score -=5;
    playerScore.innerHTML="Score : " + score;
})

// Dont randomly click

document.addEventListener("click",()=>{ 

    bullets --;
    bullet.innerHTML= "Bullets: " + bullets;
    if(bullets>=0 && score>= goal) {
        levelUp();

    }else if (bullets<0 ){
        let name= prompt("Please tell us your name");  
        alert(name + " became lunch at level "+ level+ " !!!");
        record();
    }
});

//level Up mechanics

levelUp =()=> {
level++;
goal +=10;
bullets +=15;
bullet.innerHTML= "Bullets: " + bullets;
lv.innerHTML = "Level: "+ level;
mobSpawn -= 100;
catSpawn -=100;
switch(level){
    case(level>=13):
    mob2Spawn -= 100;
    mob3Spawn -= 100;
    mob4Spawn -= 100;
    owlSpawn -=100;
    snakeSpawn -=100;
    sheepSpawn -= 100;
    break;
    case(level>=10):
    mob2Spawn -= 100;
    mob3Spawn -= 100;
    owlSpawn -=100;
    snakeSpawn -=100;
    break;
    case(level>=5):
    mob2Spawn -= 100;
    owlSpawn -=100;
    break;
};
if(catSpawn<=0){
let name= prompt("Please tell us your name");
    alert(name + " survived !!!");
    record();
    };
};


scoreBoard=()=>{
localStorage.getItem("PlayerName");
localStorage.getItem("Points");
localStorage.getItem("Levels");
};
record=()=>{
localStorage.setItem("PlayerName",name);
localStorage.setItem("Points",score);
localStorage.setItem("Levels",level);
} ;
