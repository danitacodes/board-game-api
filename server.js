const express = require('express');
const app = express();
const PORT = 8000;

let boardGame = {
    'monopoly': {
        'yearIntroduced': 1935,
        'minOfPlayers': 2,
        'maxOfPlayers': 8,
        'ageRange': '7 and up'
    },
    'game of life': {
        'yearIntroduced': 1960,
        'minOfPlayers': 2,
        'maxOfPlayers': 4,
        'ageRange': '8 and up'
    },
    'clue': {
        'yearIntroduced': 1949,
        'minOfPlayers': 3,
        'maxOfPlayers': 6,
        'ageRange': '8 and up'
    },
    'candyland': {
        'yearIntroduced': 1949,
        'minOfPlayers': 2,
        'maxOfPlayers': 4,
        'ageRange': '3 and up'
    },
    'scrabble': {
        'yearIntroduced': 1938,
        'minOfPlayers': 2,
        'maxOfPlayers': 4,
        'ageRange': '8 and up'
    },
    'battleship': {
        'yearIntroduced': 1967,
        'minOfPlayers': 2,
        'maxOfPlayers': 2,
        'ageRange': '7 and up'
    },
    'risk': {
        'yearIntroduced': 1957,
        'minOfPlayers': 2,
        'maxOfPlayers': 6,
        'ageRange': '10 and up'
    },
    'stratego': {
        'yearIntroduced': 1946,
        'minOfPlayers': 2,
        'maxOfPlayers': 2,
        'ageRange': '8 and up'
    },
    'backgammon': {
        'yearIntroduced': 1946,
        'minOfPlayers': 2,
        'maxOfPlayers': 2,
        'ageRange': '5 and up'
    },
    'connect four': {
        'yearIntroduced': 1974,
        'minOfPlayers': 2,
        'maxOfPlayers': 2,
        'ageRange': '6 and up'
    },
    'operation': {
        'yearIntroduced': 1965,
        'minOfPlayers': 1,
        'maxOfPlayers': 4,
        'ageRange': '6 and up'
    }
}
//GET ROUTE
app.get('/', (req, res) => {
    res.sendFile(__dirname +'/index.html')
})

app.get('/api/:game', (req, res) => {
    const gameName = req.params.game.toLowerCase()
    
    if (boardGame[gameName]) {
        res.json(boardGame[gameName])
    } else {
        res.json(boardGame['unknown'])
    }
    
})
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})