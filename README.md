# GAME 2048

- [DEMO LINK](https://DimaK88.github.io/2048/)

## Technologies Used

* **HTML5**
  I used it to structure the game board, interface elements, score,         buttons, and game messages.

* **SCSS (Sass)**
  CSS preprocessor, for flexibility and support for nested syntax for styling. All visual aspects of the game, including tile styles and animations, are implemented using SCSS.

* **JavaScript (ES6+)**
  The main language for implementing the 2048 game.I used strict mode ('use strict') to ensure clean and safe execution of JavaScript code. In particular, modules are used to structure the code and game logic into separate files (Game.class.js and main.js), which improves the readability and maintainability of the code.The game logic is encapsulated in the "`Game` class", which manages the game state, moves processing, new tile generation, and win/loss condition checks.DOM manipulation and event handling was created to dynamically update the game interface and respond to user interaction using standard browser API (button presses, arrow key movements)

## How to Launch a Project
  To run the game locally and test it:

    1. Clone the repository: 'git clone'.
    2. Install dependencies: execute the command 'npm install'.
    3. After installing the dependencies, run the project using the command: 'npm start'.

## How to play
  To start the game, press "start", use the arrows "up, right, down, left". "Restart" to start a new game.
