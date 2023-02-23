# My-Tech-Journey

# Developing a zombie shooter game - Zombie Survivor

## Choice of game
This is a a fun take on arcade shooter games where mobs appear randomly and the player has a split second to decide if its an enemy or a civilian.

Player object is to gain the highest score in the scoreboard, just like in an arcade.

<br>

## Wireframe
Project 1 wireframe1024_1.jpg

<br>

## Pseudocode (How to play)

1) We would need to make sure that the mobs are generated at random locations within the play area. 

2) The mobs despawn after a set time.

3) Each mob has different points, poitive for enemies and negative for friendly.

4) Mobs gets faster as levels increase but set restiction of 2 seconds so that atleast you can click it.

5) Additional mob are added as player increase level.

6) Each level gives you more bullets and when you run out of bullets, you lose.

7) Once game end, gameboard disappear. Ask player to input name into the score board. If top 10 player, it will be displayed at the side.
The game then resets.

<br>

## Zombie Survivor Game

The game lobby, image below, show the points of the mobs and a quick instruction on how to play it.
Game Lobby.png


Once game is started, the game board will appear with the mobs.
GameStart.png

As you progress in the levels, new mobs will appear.
NewMobsAppear.png

Once your bullets run out, you will see this screen and input your name.
GameOver.png

Your name will be added and high score will be tabulated.
HighScoreAddGameReset.png


## HTML  & CSS

HTML.png
CSS.png

## Javascript

Javascript.png

SpawnRate is my favorite function, with it I can set the speed of the new spawn.

## Challenges

Making a top score board was a challenge. Read up and learnt about json.stringify, this enable me to only have 2 variable to manipulate, highscore and the newly made string. Then I push the new data into the highscore array. After that it was just a matter of sorting the array to get the top 10 players.
