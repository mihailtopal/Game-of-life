# Game of Life

## Description

**Game of Life** is a simulation of the famous cellular automaton devised by mathematician John Conway. The game is a zero-player game, meaning its progression is determined by its initial state, with no further input from the user. This implementation showcases interactive features using HTML, CSS, and JavaScript, allowing users to manipulate and observe patterns within the grid.

## Features

- **Add Live Cells**: Click on the grid to toggle cells between alive and dead.
- **Add Glider**: Place a glider pattern on the grid.
- **Random Arrangement**: Generate a random pattern of live cells across the grid.
- **Clear Field**: Reset the grid to all dead cells.
- **Pause/Continue**: Control the simulation to pause or continue.
- **Responsive Design**: The grid size automatically adjusts to fit the screen size, ensuring optimal playability on both desktop and mobile devices.

## Installation and Usage

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/mihailtopal/Game-of-life.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Game-of-life
    ```

3. Open the `index.html` file in your web browser to start the simulation.

## How to Play

- **Click to Add Live Cells**: Click on any cell in the grid to toggle its state between alive and dead.
- **Add Glider**: Use the "Add Glider" button to place a glider pattern on the grid. A glider is a specific pattern that moves diagonally across the grid.
- **Random Arrangement**: Click the "Random" button to populate the grid with a random distribution of live cells.
- **Clear Field**: Click the "Clear" button to reset the grid, removing all live cells.
- **Pause/Continue**: Use the "Pause" and "Continue" buttons to control the simulation. Pausing allows you to make changes to the grid or observe the state before resuming.

## Rules of the Game

The game operates based on the following rules, applied to each cell in the grid:

1. **Survival**:
   - A live cell with 2 or 3 live neighbors stays alive.
   
2. **Death**:
   - A live cell with fewer than 2 live neighbors dies (under-population).
   - A live cell with more than 3 live neighbors dies (over-population).
   - A dead cell with exactly 3 live neighbors becomes a live cell (reproduction).

## Project Structure

- `index.html` — The main HTML file that sets up the grid and game controls.
- `style.css` — CSS file for styling the game grid and UI elements.
- `script.js` — JavaScript file containing the game logic and user interactions.
- `README.md` — This readme file.

## Requirements

- Any modern web browser

## Author

- **Mihail Topal**
- **GitHub**: [mihailtopal](https://github.com/mihailtopal)

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
