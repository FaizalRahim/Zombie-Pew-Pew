//? Global scope

//start labels
const start = document.getElementById("start")
const playerScore= document.getElementById("playerScore");
const bullet = document.getElementById("bullets");
const lv = document.getElementById("lv");
const playerName = document.getElementById("name");
const background = document.getElementById("background");
const message = document.getElementById("win");
const enter = document.getElementById("enter");
const highScoreList = document.getElementById("highScore");
const highScores = JSON.parse(localStorage.getItem('highScores'))|| [];


//npcs
const npcs = [{npc: document.getElementById("mob"), baseRate: 1600,points: 1, levelAppear: 1},
{npc: document.getElementById("mob2"), baseRate: 1000,points: 2, levelAppear: 5},
{npc: document.getElementById("mob3"), baseRate: 750,points: 3, levelAppear: 10},
{npc: document.getElementById("mob4"), baseRate: 500,points: 5, levelAppear: 13},
{npc: document.getElementById("cat"), baseRate: 1600,points: -1, levelAppear: 1},
{npc: document.getElementById("owl"), baseRate: 1000,points: -2, levelAppear: 5},
{npc: document.getElementById("snake"), baseRate: 750,points: -3, levelAppear: 10},
{npc: document.getElementById("sheep"), baseRate: 500,points: -5, levelAppear: 13},]

//start


let level = 1;
let score = 0;
let bullets = 16;
let goal = level*10;


//? functions

spawnRate = (level,baseRate) => {
    const minRate = 200;
    return Math.max(minRate, baseRate - (level - 1)*100);
}

kill= (npc,points) =>{
    npc.addEventListener("click",()=>{ 
        score += points;
        npc.style.visibility="hidden";
        playerScore.innerHTML="Score : " + score;
    });
};

randomNumber = () => {
    return Math.floor((Math.random()*800)+1)};

newNpc = (levelAppear,npc) => {
    if(level >=levelAppear){
    npc.style.visibility= "visible";
    npc.style.top=randomNumber()+"px" ;
    npc.style.left=randomNumber()+"px";
    }};

ammo = () => {
    document.addEventListener('click',()=>{
    bullet.min= 0;
    bullets --;
    bullet.innerHTML= "Bullets: " + Math.max(bullet.min,bullets);})
};

win = () => {(document.addEventListener("click",()=>{ 
      if(bullets>=0 && score>= goal) {
        levelUp();
    }else if (bullets<=0 ){
    message.innerHTML= ( "You became lunch at level "+ level+ " !!! Enter your name to save your score.");
    message.style.display="inline";
    playerName.style.display="inline";
    enter.style.display="inline";
    for(let i =0; i< npcs.length; i++){
        npcs[i].npc.style.display="none"
    };
    background.style.display="none";
}}))};

levelUp =()=> {
    level++;
    goal +=10;
    bullets +=15;
    bullet.innerHTML= "Bullets: " + bullets;
    lv.innerHTML = "Level: "+ level;
    };
    

saveHighScore=(playerName,endedAtLevel,playerScore)=>{
    highScores.push ({playerName,endedAtLevel,playerScore});
    localStorage.setItem("highScores",JSON.stringify(highScores));

};

displayHighScores = ()=> {
    highScores.sort((a,b)=> b.playerScore-a.playerScore);
    highScoreList.style.display="block";
    highScoreList.innerHTML = ``;
    for(let i=0;i<Math.min(highScores.length,10);i++){
        const scoreItem = document.createElement(`li`);
        scoreItem.textContent = `${highScores[i].playerName} , level ${highScores[i].endedAtLevel}, score ${highScores[i].playerScore}`;
        highScoreList.appendChild(scoreItem);
    }
}

//? for .... loop

//start game

start.addEventListener("click",()=>{
    level = 1;
    score = 0;
    bullets= 16;
    message.style.display="none";
    playerName.style.display="none";
    enter.style.display="none";
    start.style.display="block";
    bullet.style.display="block";
    lv.style.display="block";
    playerScore.style.display="block";
    start.innerHTML ="Restart Game";
    bullet.innerHTML="Bullets: "+ bullets;
    lv.innerHTML = "Level: "+ level;
    playerScore.innerHTML="Score : " + score;
    for(let i =0; i< npcs.length; i++){
        npcs[i].npc.style.display="block"
    };
    background.style.display="block";
    
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

//Enter name

enter.addEventListener("click",()=>{
    const playName = playerName.value;
    message.innerHTML= ( playerName.value + "'s score has been recorded !!!");
    saveHighScore(playerName.value,level,score);
    displayHighScores(playerName.value,level,score);
});

//Display Highscore

displayHighScores();
