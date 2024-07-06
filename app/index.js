const { exec } = require('child_process');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

//Random engine

app.post('/random_move', (req, res) => {
    const { fen} = req.body;

    exec(`python chess_random_engine.py "${fen}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).send('Error processing move');
        }
        res.json({ bestMove: stdout.trim() });
    });
});

//Stockfish Engine

app.post('/stockfish_move', (req, res) => {
    const {fen} = req.body;

    exec(`python stockfish_engine.py "${fen}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).send('Error processing move');
        }
        res.json({ bestMove: stdout.trim() });
    });
});

//ML Engine

app.post('/ml_move', (req, res) => {
    const {fen} = req.body;

    exec(`python ml_model.py "${fen}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).send('Error processing move');
        }
        res.json({ bestMove: stdout.trim() });
    });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
