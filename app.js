//? Global scope

//start labels
const start = document.getElementById("start")
const background = document.getElementById("background");
const highScoreList = document.getElementById("highScore");
const highScores = JSON.parse(localStorage.getItem('highScores'))|| [];

const startLabels = {
    playerScore: document.getElementById("playerScore"),
    bullet: document.getElementById("bullets"),
    lv: document.getElementById("lv"),
    goals: document.getElementById("goal"),
};

const endLabels = {
    playerName: document.getElementById("name"),
    message: document.getElementById("win"),
    enter: document.getElementById("enter"),
};

//npcs
const npcs = [{npc: document.getElementById("mob"), baseRate: 1600,points: 1, levelAppear: 1},
{npc: document.getElementById("mob2"), baseRate: 1000,points: 2, levelAppear: 2},
{npc: document.getElementById("mob3"), baseRate: 750,points: 3, levelAppear: 10},
{npc: document.getElementById("mob4"), baseRate: 500,points: 5, levelAppear: 13},
{npc: document.getElementById("cat"), baseRate: 1600,points: -1, levelAppear: 1},
{npc: document.getElementById("owl"), baseRate: 1000,points: -2, levelAppear: 5},
{npc: document.getElementById("snake"), baseRate: 750,points: -3, levelAppear: 10},
{npc: document.getElementById("sheep"), baseRate: 500,points: -5, levelAppear: 13},]


//? functions

spawnRate = (level,baseRate) => {
    const minRate = 200;
    return Math.max(minRate, baseRate - (level - 1)*100);
}

kill= (npc,points) =>{
    npc.addEventListener("click",()=>{ 
        score += points;
        npc.style.visibility="hidden";
        scoreBoard();
    });
};

randomTopNumber = () => {
    return Math.floor((Math.random()*550)+150)};

randomLeftNumber = () => {
    return Math.floor((Math.random()*780)+250)};

newNpc = (levelAppear,npc) => {
    if(level >=levelAppear){
    npc.style.visibility= "visible";
    npc.style.top=randomTopNumber()+"px" ;
    npc.style.left=randomLeftNumber()+"px";
    }
    else { npc.style.visibility="hidden"};
};

ammo = () => {
    document.addEventListener('click',()=>{
    bullets --;
    scoreBoard();})
};

win = () => {(document.addEventListener("click",()=>{ 
      if(bullets>=0 && score>= goal) {
        levelUp();
    }else if (bullets<=0 ){
    endLabels.message.innerHTML= ( "Game Over !!! Enter your name to save your score.");
    endLabel("inline")
    backgroundSwitch("none");

}}))};

levelUp =()=> {
    level++;
    goal +=10;
    bullets +=15;
    scoreBoard();

    };
    

saveHighScore=(playerName,endedAtLevel,playerScore)=>{
    highScores.push ({playerName,endedAtLevel,playerScore});
    localStorage.setItem("highScores",JSON.stringify(highScores));

};

displayHighScores = ()=> {
    highScores.sort((a,b)=> b.playerScore-a.playerScore);
    highScoreList.style.display="block";
    highScoreList.innerHTML = `Top 10 Players`;
    for(let i=0;i<Math.min(highScores.length,10);i++){
        const scoreItem = document.createElement(`li`);
        scoreItem.textContent = `${i+1}) ${highScores[i].playerName} level ${highScores[i].endedAtLevel} score ${highScores[i].playerScore}`;
        highScoreList.appendChild(scoreItem);
    }
}
backgroundSwitch= (status)=> {
    for(let i =0; i< npcs.length; i++){
        npcs[i].npc.style.display=status
    };
    background.style.display=status;
};

endLabel= (status)=> {
    Object.keys(endLabels).forEach((key)=>{
        endLabels[key].style.display=status;
    })
};

startLabel= (status)=> {
    Object.keys(startLabels).forEach((key)=>{
        startLabels[key].style.display=status;
    })
};

scoreBoard=()=>{
    startLabels.bullet.min= 0;
    startLabels.bullet.innerHTML="Bullets: "+ Math.max(startLabels.bullet.min,bullets);
    startLabels.lv.innerHTML = "Level: "+ level;
    startLabels.playerScore.innerHTML="Score : " + score;
    startLabels.goals.innerHTML="Score to level up: " + goal;
};

//Game Lobby


let level = 1;
let score = 0;
let bullets = 15;
let goal = level*10;
backgroundSwitch("none");
displayHighScores();


//start game

start.addEventListener("click",()=>{
    level = 1;
    score = 0;
    bullets= 16;
    goal = level*10;
    endLabel("none");
    startLabel("block");
    scoreBoard();
    start.innerHTML ="Restart Game";
    backgroundSwitch("block");

});

//npc generation

for(let i =0; i< npcs.length; i++){
    setInterval(()=> {
        newNpc(npcs[i].levelAppear,npcs[i].npc);
    },spawnRate(level,npcs[i].baseRate));
};

//Ammo used

ammo();

//points generation

for(let i=0; i<npcs.length;i++){
    kill(npcs[i].npc,npcs[i].points);
};

// win condition
win();

//Enter name and restart game

enter.addEventListener("click",()=>{
    const playName = endLabels.playerName.value;
    saveHighScore(endLabels.playerName.value,level,score);
    displayHighScores();
    level = 1;
    score = 0;
    bullets= 16;
    goal = level*10;
    endLabel("none");
    startLabel("block");
    scoreBoard();
    start.innerHTML ="Restart Game";
    backgroundSwitch("block");
    
});



