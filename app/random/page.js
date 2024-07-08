'use client'
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { Chess } from 'chess.js';
import { ToastContainer, toast } from 'react-toastify';

const Chessboard = dynamic(() => import('chessboardjsx'), { ssr: false });

const App = () => {
    const newGame = new Chess();
    const [game, setGame] = useState(newGame);
    const [fen, setFen] = useState('start');
    const [gameover, setGameover] = useState(false);
    const [winner, setWinner] = useState(null);
    const [boardWidth, setBoardWidth] = useState(560); 

    useEffect(() => {
       
        const updateBoardWidth = () => {
            setBoardWidth(window.innerWidth < 768 ? 340 : 560);
        };

        
        updateBoardWidth();

        
        window.addEventListener('resize', updateBoardWidth);

        
        return () => window.removeEventListener('resize', updateBoardWidth);
    }, []);

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
            if(game.turn()==='b')   return;
            const moveResult = game.move(move);
            if (moveResult === null) return;
            setFen(game.fen());

            if (game.isGameOver()) {
                setGameover(true);
                setWinner(game.turn() === 'w' ? 'Black' : 'White');
                return;
            }

            const fen = game.fen();
            const response = await axios.post('https://chess-server1.azurewebsites.net/random_move', { fen });
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
            <div className="flex flex-col md:flex-row font-[montserrat] font-extrabold justify-between items-center md:items-start p-5">
                <div className='w-full md:w-[30%] flex flex-col items-center p-5 gap-5'>
                    <span className='text-black md:text-xl text-base text-center'>Hello I am Random AI !</span>
                    <span className='text-black md:text-lg text-sm text-center'>I play random moves</span>
                    <span className='text-gray-700 md:text-lg text-base text-center'>How I work?</span>
                    <span className='text-gray-700 md:text-base text-sm text-center'>I find all possible legal moves at a particular position and choose any one of them using RNG (Random Number Generator)</span>
                </div>

                <div className='flex flex-col items-center md:p-1 md:m-4 relative'>
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

                    <div className="md:shadow-2xl md:w-auto">
                        <div className="w-[340px] md:w-[560px]">
                            <Chessboard
                                position={fen}
                                width={boardWidth}
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

                <div className='w-full md:w-[30%] flex justify-center items-center mt-5 md:mt-0'>
                    <button onClick={resetGame} className="mt-2 font-[montserrat] md:text-xl text-sm shadow-lg bg-[#a36634] hover:bg-[#5a3a1f] text-white font-bold p-4 border-b-4 border-[#a36634] hover:border-[#5a3a1f] rounded-full hover:shadow-2xl">
                        New Game
                    </button>
                </div>
            </div>
        </>
    );
};

export default App;
