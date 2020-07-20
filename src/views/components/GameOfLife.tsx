import React from 'react';
import styles from './GameOfLife.module.scss';

type GameOfLifeState = {
  cells: Array<Array<boolean>>;
  boardSize: number;
};

export class GameOfLife extends React.Component<{}, GameOfLifeState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      cells: Array(5).fill(Array(5).fill(false)),
      boardSize: 5,
    };
  }

  handleChange(boardSize: number) {
    this.setState({
      boardSize: boardSize,
      cells: Array(boardSize).fill(Array(boardSize).fill(false)),
    });
  }

  handleCellClicked(y: number, x: number) {
    let cells: Array<Array<boolean>> = JSON.parse(JSON.stringify(this.state.cells));
    cells[y][x] = !cells[y][x];
    this.setState({
      cells: cells,
    });
  }

  handleNextClicked() {
    let currentCells: Array<Array<boolean>> = JSON.parse(JSON.stringify(this.state.cells));

    let newCells: Array<Array<boolean>> = JSON.parse(JSON.stringify(this.state.cells));

    currentCells.forEach((row, y) => {
      row.forEach((column, x) => {
        const neighboursCount = this.getAliveNeighbours(currentCells, y, x);

        if (column) {
          if (neighboursCount < 2 || neighboursCount > 3) {
            newCells[y][x] = false;
          }
        } else {
          if (neighboursCount === 3) {
            newCells[y][x] = true;
          }
        }
      });
    });

    this.setState({
      cells: newCells,
    });
  }

  getAliveNeighbours(cells: Array<Array<boolean>>, y: number, x: number): number {
    let sum = 0;

    const rowAbove = cells[y - 1] || Array<boolean>();
    const rowBelow = cells[y + 1] || Array<boolean>();

    const neighbours = [
      // Cells above current row (y)
      rowAbove[x - 1],
      rowAbove[x],
      rowAbove[x + 1],
      // Cells to the left and right
      cells[y][x - 1],
      cells[y][x + 1],
      // Cells below current row (y)
      rowBelow[x - 1],
      rowBelow[x],
      rowBelow[x + 1],
    ];

    neighbours.forEach((val) => (sum += +val));

    return sum;
  }

  render() {
    return (
      <>
        <div className={styles.boardInput}>
          <label htmlFor="board-size-input">Board Size: </label>
          <input
            type="number"
            id="board-size-input"
            min="5"
            max="36"
            value={this.state.boardSize}
            onChange={(e) => this.handleChange(+e.target.value)}
          />
        </div>

        <div>
          <table className={styles.board}>
            <tbody>
              {this.state.cells.map((value, y) => (
                <tr key={y}>
                  {value.map((checked, x) => (
                    <td className={styles.cell} key={x}>
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => this.handleCellClicked(y, x)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <button onClick={() => this.handleNextClicked()}>Next</button>
        </div>
      </>
    );
  }
}
