'use strict';

/**
 * This class represents the game.
 * Now it has a basic structure, that is needed for testing.
 * Feel free to add more props and methods if needed.
 */
export class Game {
  /**
   * Creates a new game instance.
   *
   * @param {number[][]} initialState
   * The initial state of the board.
   * @default
   * [[0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0]]
   *
   * If passed, the board will be initialized with the provided
   * initial state.
   */
  constructor(
    initialState = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  ) {
    this.initialState = initialState;
    this.score = 0;
    this.state = [...this.initialState];
    this.status = 'idle';
  }

  moveLeft() {
    const newState = [];
    let canMove = false;

    for (let i = 3; i >= 0; i--) {
      const row = this.state[i].filter((number) => number !== 0);

      for (let n = 1; n < row.length; n++) {
        if (row[n] === row[n - 1]) {
          row[n - 1] *= 2;
          delete row[n];

          this.score += row[n - 1];
        }
      }

      const newRow = row.filter((number) => number !== undefined);

      for (let j = newRow.length; j < 4; j++) {
        newRow.push(0);
      }

      newState[i] = newRow;
    }

    for (let i = 0; i <= 3; i++) {
      for (let n = 0; n <= 3; n++) {
        if (newState[i][n] !== this.state[i][n]) {
          canMove = true;
        }
      }
    }

    if (canMove) {
      this.state = newState;
      this.addCell();
    }

    this.checkLose();
    this.checkWin();
  }

  moveRight() {
    const newState = [];
    let canMove = false;

    for (let i = 3; i >= 0; i--) {
      const row = this.state[i].filter((number) => number !== 0);

      for (let n = row.length - 1; n >= 0; n--) {
        if (row[n] === row[n - 1]) {
          row[n] *= 2;
          row[n - 1] = 0;

          this.score += row[n];
        }
      }

      const newRow = row.filter((number) => number !== 0);

      for (let j = newRow.length; j < 4; j++) {
        newRow.unshift(0);
      }

      newState[i] = newRow;
    }

    for (let i = 0; i <= 3; i++) {
      for (let n = 0; n <= 3; n++) {
        if (newState[i][n] !== this.state[i][n]) {
          canMove = true;
        }
      }
    }

    if (canMove) {
      this.state = newState;
      this.addCell();
    }

    this.checkLose();
    this.checkWin();
  }

  moveUp() {
    this.state = this.turnTable(this.state);
    this.moveLeft();
    this.state = this.turnTable(this.state);
  }
  moveDown() {
    this.state = this.turnTable(this.state);
    this.moveRight();
    this.state = this.turnTable(this.state);
  }

  /**
   * @returns {number}
   */

  getScore() {
    return this.score;
  }

  /**
   * @returns {number[][]}
   */
  getState() {
    return this.state;
  }

  /**
   * Returns the current game status.
@@ -50,19 +157,101 @@ class Game {
   * `win` - the game is won;
   * `lose` - the game is lost
   */
  getStatus() {
    return this.status;
  }

  /**
   * Starts the game.
   */
  start() {
    this.status = 'playing';
    this.addCell();
    this.addCell();
  }

  /**
   * Resets the game.
   */
  restart() {
    this.status = 'idle';

    this.state = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    this.score = 0;
  }

  addCell() {
    const initial = Math.random() > 0.1 ? 2 : 4;
    let count = 0;

    do {
      const row = Math.round(Math.random() * 3);
      const column = Math.round(Math.random() * 3);

      if (this.state[row][column] === 0) {
        this.state[row][column] = initial;
        count++;
      }
    } while (count < 1);
  }

  turnTable(table) {
    const newTable = [];

    for (let i = 0; i <= 3; i++) {
      const newRow = [table[0][i], table[1][i], table[2][i], table[3][i]];

      newTable.push(newRow);
    }

    return newTable;
  }

  checkWin() {
    for (let i = 0; i <= 3; i++) {
      for (let n = 0; n <= 3; n++) {
        if (this.state[i][n] === 2048) {
          this.status = 'win';
        }
      }
    }
  }

  checkLose() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.state[i][j] === 0) {
          return;
        }

        if (
          (i < 3 && this.state[i][j] === this.state[i + 1][j]) ||
          (j < 3 && this.state[i][j] === this.state[i][j + 1])
        ) {
          return;
        }
      }
    }

    this.status = 'lose';
  }
}

module.exports = Game;
