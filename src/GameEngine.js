import { Snake } from './Snake.js';
import { snakeList} from './Snake.js';


export let Boardsize = 630; // doit etre facilement divisible par NumberOfSquare
export let NumberOfSquare = 21; // doit etre un chiffre impaire
export let SquareSize = Boardsize / NumberOfSquare;


export const SnakeHead = new Snake(0, Boardsize / 2, Boardsize / 2, 0, -1);

export class GameEngine {

    static StartGame() {
        let Border = 10;
        const Middle = (Border - (SquareSize / 2));
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        // Dessine la grille de jeu
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, Boardsize + (Border * 2), Boardsize + (Border * 2));
        ctx.fillStyle = 'white';
        ctx.fillRect(Border, Border, Boardsize, Boardsize);

        // Creation de la tête du Snake
        ctx.fillStyle = 'green';
        ctx.fillRect(SnakeHead.x + Middle, SnakeHead.y + Middle, SquareSize, SquareSize);


        document.addEventListener('keydown', Snake.changeDirection);
        snakeList.push(SnakeHead)
        setInterval(mainLoop, 450);

        function mainLoop() {
            ctx.fillStyle = 'white';
            ctx.fillRect(SnakeHead.x + Middle, SnakeHead.y + Middle, SquareSize, SquareSize);
            Snake.move();
            /*for (let i = 0; i >= snakeList.length; i++) {
                let currentSnake = snakeList[snakeList.length -1]
                ctx.fillStyle = 'white';
                ctx.fillRect(currentSnake.x + Middle, currentSnake.y + Middle, SquareSize, SquareSize);
            }*/
            ctx.fillStyle = 'green';
            ctx.fillRect(SnakeHead.x + Middle, SnakeHead.y + Middle, SquareSize, SquareSize);
        }
    }
}

/*
let score = 0;
let gameBoard = { numberOfSquare: 20, width: 600, height: 600 }
let snakePart = { snakeX: (gameBoard.width / 2), snakeY: (gameBoard.height / 2) }
let direction = { x: 0, y: -1 }
let food = { foodX: (gameBoard.width / 2), foodY: (gameBoard.height / 2) }
const board = document.getElementByIdS('game-board');
// Create a new element (e.g., a list item)
const snakePartHead = document.createElement('div');

// Add a class to the new element
snakePartHead.classList.add('snake_head');
snakePartHead.style.top = `${snakePart.snakeY}px`
snakePartHead.style.left = `${snakePart.snakeX}px`

// Create a new element (e.g., a list item)
//const snakePart = document.createElement('div');

//snakePart.classList.add('snake_part');
//snakePart.style.top = `${snakeBody.BsnakeY}px`
//snakePart.style.left = `${snakBody.BsnakeX}px`

// Create a new element (e.g., a list item)
const foodElement = document.createElement('div');

// Add a class to the new element
foodElement.classList.add('food');
foodElement.style.top = `${food.foodY}px`
foodElement.style.left = `${food.foodX}px`
board.appendChild(foodElement);
board.appendChild(snakePartHead);
//board.appendChild(snakePart);

const scoreElement = document.getElementById('score');

document.addEventListener('keydown', changeDirection);
setInterval(mainLoop, 150);
spawnFood();

let snakeList = []
let head = { ...snakeList[0] };
let body = snakeList[snakeList.length];
let lasposX;
let lasposY;

function mainLoop() {
    print();

    if (direction.x === -1) snakePart.snakeX = (snakePart.snakeX - gameBoard.width / gameBoard.numberOfSquare); // left
    if (direction.y === -1) snakePart.snakeY = (snakePart.snakeY - gameBoard.height / gameBoard.numberOfSquare); // up
    if (direction.x === 1) snakePart.snakeX = (snakePart.snakeX + gameBoard.width / gameBoard.numberOfSquare); // right
    if (direction.y === 1) snakePart.snakeY = (snakePart.snakeY + gameBoard.height / gameBoard.numberOfSquare); // down
    
    //snakeList.push({ ...body });
    //lasposX = snakePart.snakeX;
    //lasposY = snakePart.snakeY;
    //snakeList[snakeList.length] = lastSnakePart;
    //lastSnakePart.snakeX = lasposX;
    //lastSnakePart.snakeY = lasposY;

    snakePartHead.style.top = `${snakePart.snakeY}px`
    snakePartHead.style.left = `${snakePart.snakeX}px`
    foodElement.style.top = `${food.foodY}px`
    foodElement.style.left = `${food.foodX}px`
    checkForBorderCollision();
    checkForFoodCollision();
}

function draw() {
    // Clear previous drawings
    board.innerHTML = '';

    snake.forEach(part => {
        const partElement = document.createElement('div');
        partElement.style.left = `${part.x}px`;
        partElement.style.top = `${part.y}px`;
        partElement.classList.add('snake-part');
        board.appendChild(partElement);
    });
}

function checkForBorderCollision() {
    if ((snakePart.snakeY < 0) || (snakePart.snakeY >= gameBoard.height)) {
        alert("You died");
    }
    if ((snakePart.snakeX < 0) || (snakePart.snakeX >= gameBoard.width)) {
        alert("You died");
    }
}

function checkForFoodCollision() {
    if ((snakePart.snakeY == food.foodY) && (snakePart.snakeX == food.foodX)) {
        score++;
        scoreElement.textContent = score;
        spawnFood();
    }
}
S
function newbodypart() {

}

function changeDirection(e) {
    if (e.keyCode === 37 && direction.x === 0) direction = { x: -1, y: 0 }; // left
    if (e.keyCode === 38 && direction.y === 0) direction = { x: 0, y: -1 }; // up
    if (e.keyCode === 39 && direction.x === 0) direction = { x: 1, y: 0 }; // right
    if (e.keyCode === 40 && direction.y === 0) direction = { x: 0, y: 1 }; // down
}

function spawnFood() {
    food.foodX = (Math.floor(Math.random() * gameBoard.numberOfSquare)) * (gameBoard.width / gameBoard.numberOfSquare);
    food.foodY = (Math.floor(Math.random() * gameBoard.numberOfSquare)) * (gameBoard.height / gameBoard.numberOfSquare);
}

function print() {

}*/

