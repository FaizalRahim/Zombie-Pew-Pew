# My-Tech-Journey

# Developing a zombie shooter game - Zombie Survivor

## Choice of game
This is a a fun take on arcade shooter games where mobs appear randomly and the player has a split second to decide if its an enemy or a civilian.

Player object is to gain the highest score in the scoreboard, just like in an arcade.

<br>

## Wireframe
![Project 1 wireframe1024_1](https://user-images.githubusercontent.com/122983127/220835783-6cd1b375-c545-43a0-9a72-b45b81b0e3e7.jpg)


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
<img width="1423" alt="Game Lobby" src="https://user-images.githubusercontent.com/122983127/220835881-aead3dbd-ceb8-4bcb-90e9-7abc4a4ce1d0.png">


Once game is started, the game board will appear with the mobs.
<img width="1423" alt="GameStart" src="https://user-images.githubusercontent.com/122983127/220835838-f429ce2f-9598-4a23-b256-87c58c213e59.png">

As you progress in the levels, new mobs will appear.
<img width="1423" alt="NewMobsAppear" src="https://user-images.githubusercontent.com/122983127/220835987-d668600f-e8b3-4d67-876d-e7a90f2764d4.png">

Once your bullets run out, you will see this screen and input your name.
<img width="1423" alt="GameOver" src="https://user-images.githubusercontent.com/122983127/220835865-8737f171-32c2-4b7c-9874-2d3eb78a135b.png">

Your name will be added and high score will be tabulated.
<img width="1423" alt="HighScoreAddGameReset" src="https://user-images.githubusercontent.com/122983127/220836169-7db0715c-4b8d-498e-84fa-ada8221875a2.png">


## HTML  & CSS

<img width="964" alt="HTML" src="https://user-images.githubusercontent.com/122983127/220836109-4d4e89ac-2792-4f72-bd51-a8e2f2ef573d.png">
<img width="788" alt="CSS" src="https://user-images.githubusercontent.com/122983127/220836099-3d823da5-7a85-4d08-901c-e8c8667a57f5.png">

## Javascript

<img width="774" alt="Javascript" src="https://user-images.githubusercontent.com/122983127/220836238-93a6965a-2bef-4cac-8a7d-07f6b3c1dfca.png">

SpawnRate is my favorite function, with it I can set the speed of the new spawn.

## Challenges

Making a top score board was a challenge. Read up and learnt about json.stringify, this enable me to only have 2 variable to manipulate, highscore and the newly made string. Then I push the new data into the highscore array. After that it was just a matter of sorting the array to get the top 10 players.

## Future Developments

If we are given an apportunity to revisit this project, I would

1) Add a background music
2) Add sound clips when u kill zombie
3) Add new items features like ammo pack
4) Add new mobs and a boss battle

## Artwork

 Mob Images from https://www.flaticon.com/authors/smashicons
 
 Background from https://twitter.com/angry__snail/status/1156611028572151811
