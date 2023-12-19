import { SnakeHead } from './GameEngine.js';
import { SquareSize } from './GameEngine.js';

export let snakeList = []
export class Snake {


    constructor(id, x, y, directionX, directionY) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
    }

    static changeDirection(e) {
        if (e.keyCode === 37 && SnakeHead.directionX == 0) SnakeHead.directionX = -1, SnakeHead.directionY = 0; // go left
        if (e.keyCode === 38 && SnakeHead.directionY == 0) SnakeHead.directionY = -1, SnakeHead.directionX = 0; // go up
        if (e.keyCode === 39 && SnakeHead.directionX == 0) SnakeHead.directionX = 1, SnakeHead.directionY = 0; // go right
        if (e.keyCode === 40 && SnakeHead.directionY == 0) SnakeHead.directionY = 1, SnakeHead.directionX = 0; // go down
    }

    static move() {
        if (SnakeHead.directionX == -1) SnakeHead.x = (SnakeHead.x - SquareSize); // gauche
        if (SnakeHead.directionY == -1) SnakeHead.y = (SnakeHead.y - SquareSize); // haut
        if (SnakeHead.directionX == 1) SnakeHead.x = (SnakeHead.x + SquareSize); // droite
        if (SnakeHead.directionY == 1) SnakeHead.y = (SnakeHead.y + SquareSize); // bas
    }

}
