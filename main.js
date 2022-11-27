const play = {
    play1: {
        mark: 'X',
        turn: true,
    },
    play2: {
        mark: 'O',
    }
};

const board = [
    [], [], [],
    [], [], [],
    [], [], [],
];

const screenTurn = (isPlay1) => {
    if (!isPlay1) {
        const idPlay1 = document.getElementById('idPlay1');
        idPlay1.innerText = `👉 ${play.play1.name.toUpperCase()} você Jogar com ${play.play1.mark}`;
        const idPlay2 = document.getElementById('idPlay2');
        idPlay2.innerText = `${play.play2.name.toUpperCase()} você Jogar com ${play.play2.mark}`;

        play.play1.turn = true;
    } else {
        const idPlay1 = document.getElementById('idPlay1');
        idPlay1.innerText = `${play.play1.name.toUpperCase()} você Jogar com ${play.play1.mark}`;
        const idPlay2 = document.getElementById('idPlay2');
        idPlay2.innerText = `👉 ${play.play2.name.toUpperCase()} você Jogar com ${play.play2.mark}`;

        play.play1.turn = false;
    }
};

function inicio() {
    const turn = play.play1.turn;
    play.play1.name = document.getElementById('nPlay1').value;
    play.play2.name = document.getElementById('nPlay2').value;

    const casa = document.getElementById('home');
    casa.style.setProperty('Display', 'none');
    const startGame = document.getElementById('gamer');
    startGame.style.setProperty('Display', 'block');

    screenTurn(false);
}

const isVictoria = (position, turn) => {
    if (board[position[0]] === turn.mark && board[position[1]] === turn.mark && board[position[2]] === turn.mark) {
        return true;
    }
};

const isTie = (position) => {
    const possibility = position.map((index) => board[index])
    const everyTrue = [
        possibility.includes('O'),
        possibility.includes('X'),
    ];
    return everyTrue.every((data) => data === true);
}

const victoryPossibility = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [6, 4, 2],
]

const verifyVictory = (turn) => {
    const win = victoryPossibility.map((possibility) => isVictoria(possibility, turn));
    if (win.includes(true)) {
        alert('win' + turn.name);
    }
};

const verifyTie = (turn) => {
    const tie = victoryPossibility.map((possibility) => isTie(possibility, turn));
    if (tie.every((data) => data === true)) {
        console.log('tie');
    }
}

const handleSelected = (positionBoard) => {
    const position = positionBoard.target;
    const isPlay1 = play.play1.turn;

    if (board[position.id].length === 0) {
        let turn;
        isPlay1 ? turn = play.play1 : turn = play.play2;

        position.innerHTML = turn.mark;
        board[position.id] = turn.mark;
        verifyTie(turn);
        verifyVictory(turn);
        screenTurn(isPlay1);
    }
};

board.forEach((item, index) => {
    const divBorde = document.getElementById('board');
    const createBoard = document.createElement('div');
    createBoard.addEventListener('click', handleSelected);
    createBoard.id = index;
    createBoard.classList.add('uniteBoard');
    divBorde.appendChild(createBoard);
})
