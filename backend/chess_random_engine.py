import sys
import chess
import random

def get_best_move(fen):
    board = chess.Board(fen)
    best_move = random.choice(list(board.legal_moves))
    return best_move.uci()

if __name__ == "__main__":
    fen = sys.argv[1]
    print(get_best_move(fen))
