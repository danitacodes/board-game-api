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