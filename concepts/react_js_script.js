import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    return (
      <button className="square" 
              onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      wonBy: null
    }
  }

  renderInnerComponentSquare(i) {
    return <Square value={this.state.squares[i]} 
            onClick={() => this.handleClick(i)}
            />;
  }

  checkIfWinned(squares) {
    const winnerStats = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winnerStats.length; i++) {
      const [a, b, c] = winnerStats[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] == squares[c]) {
        return squares[a];
      }
    }

    return null;
  }

  handleClick(i) {
    const squares = this.state.squares.slice();

    squares[i] = this.state.xIsNext ? 'X': 'O';
    var xIsNext = ! this.state.xIsNext;
    console.log(xIsNext);
    this.setState({
                    squares: squares,
                    xIsNext: xIsNext
                  });
    let isWon = this.checkIfWinned(squares)
    if (isWon) {
      this.state.wonBy = isWon;
    }
  }

  render() {
    const status = 'Next player is: ' + (this.state.xIsNext ? 'X': 'O');
    const winningStatus = this.state.wonBy ? 'Game won by - ' + this.state.wonBy : 'Game in Progress';

    return (
      <div>
        <div className="status">{status}</div>
        <div>
          {this.renderInnerComponentSquare(0)}
          {this.renderInnerComponentSquare(1)}
          {this.renderInnerComponentSquare(2)}
        </div>
        <div>
          {this.renderInnerComponentSquare(3)}
          {this.renderInnerComponentSquare(4)}
          {this.renderInnerComponentSquare(5)}
        </div>
        <div>
          {this.renderInnerComponentSquare(6)}
          {this.renderInnerComponentSquare(7)}
          {this.renderInnerComponentSquare(8)}
        </div>
        <div>{winningStatus}</div>
      </div>
    );
  }
}

class PzkMesssage extends React.Component {
  render() {
    return (
      <h3>{this.props.pzkMsg}</h3>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div>
          <PzkMesssage pzkMsg="hello world from React.js" />
        </div>
        <div>
          <GameBoard />
        </div>
      </div>
    );
  }
}

//=======

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
