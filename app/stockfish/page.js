'use client'
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import axios from 'axios';
import Chessboard from 'chessboardjsx';
import { Chess } from 'chess.js';
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
    const newGame = new Chess();
    const [game, setGame] = useState(newGame);
    const [fen, setFen] = useState('start');
    const [gameover, setGameover] = useState(false);
    const [winner, setWinner] = useState(null);

    const resetGame = () => {
        game.reset();
        setFen('start');
        setGameover(false);
        setWinner(null);
    };

    const convertMove = (move) => {
        const from = move.substring(0, 2);
        const to = move.substring(2, 4);
        return {
            from,
            to,
            promotion: 'q'
        };
    };

    const handleMove = async (move) => {
        try {
            const moveResult = game.move(move);
            if (moveResult === null) return;
            setFen(game.fen());

            if (game.isGameOver()) {
                setGameover(true);
                setWinner(game.turn() === 'w' ? 'Black' : 'White');
                return;
            }

            const fen = game.fen();
            const response = await axios.post('http://localhost:5000/stockfish_move', { fen });
            const bestMove = response.data.bestMove;
            const bestMoveObject = convertMove(bestMove);
            game.move(bestMoveObject);
            setFen(game.fen());

            if (game.isGameOver()) {
                setGameover(true);
                setWinner(game.turn() === 'w' ? 'Black' : 'White');
                return;
            }

        } catch (error) {
            console.error("InvalidMoveError");
            toast.warn('Invalid Move', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    return (
        <>
            <div className="flex font-[montserrat] font-extrabold justify-between">

                <div className='w-[30%] flex flex-col items-center p-10 gap-5'>
                    <span className='text-black text-xl'>Hello I am StockFish Chess Engine !</span>
                    <span className='text-black text-lg'>I am integrated with the Stockfish python module.</span>

                    <span className='text-gray-700 text-lg'>What is StockFish?</span>
                    <span className='text-gray-700'>Stockfish is a powerful open-source chess engine known for its strong positional play and tactical prowess, used widely in competitive chess and analysis. It evaluates millions of positions per second to suggest optimal moves based on complex algorithms and deep calculation.</span>
                </div>

                <div className='flex flex-col items-center md:p-1 md:m-4'>

                    {gameover && (
                        <div style={{
                            width: '100%',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            padding: '20px',
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            color: '#fff',
                            borderRadius: '10px',
                            zIndex: 10,
                            textAlign: 'center',
                        }}>
                            {winner ? `Winner: ${winner}` : 'The game is a Draw!'}
                        </div>
                    )}

                    <div className=" md:shadow-2xl md:w-auto">
                        <div className="w-[340px] md:w-[560px]">
                            <Chessboard
                                position={fen}
                                width={window.innerWidth < 768 ? 340 : 560}
                                onDrop={({ sourceSquare, targetSquare }) => {
                                    if (!gameover && sourceSquare !== targetSquare) {
                                        handleMove({ from: sourceSquare, to: targetSquare, promotion: 'q' });
                                    }
                                }}
                            />
                        </div>
                    </div>


                    <ToastContainer />
                </div>

                <div className='w-[30%] flex justify-center items-center'>
                    <button onClick={resetGame} className="mt-2 font-[montserrat] md:text-xl text-sm shadow-lg bg-[#a36634] hover:bg-[#5a3a1f] text-white font-bold p-4 border-b-4 border-[#a36634] hover:border-[#5a3a1f] rounded-full hover:shadow-2xl">
                        New Game
                    </button>
                </div>
            </div>

        </>
    );
};

export default App;









