import sys
from stockfish import Stockfish

def get_best_move(fen):
    stockfish = Stockfish("./stockfish-windows-x86-64.exe")
    stockfish.set_fen_position(fen)
    best_move = stockfish.get_best_move()
    return str(best_move)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python stockfish_engine.py <FEN>")
        sys.exit(1)
    fen = sys.argv[1]
    print(get_best_move(fen))
