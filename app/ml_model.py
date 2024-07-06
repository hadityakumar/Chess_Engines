import sys
import chess
import numpy as np
import tensorflow as tf

# Load your model
model = tf.keras.models.load_model('model.h5')

def encode_piece(piece):
    arr = np.zeros(13)
    pieces = list('rnbqkpRNBQKP.')
    piece_to_index = {p: i for i, p in enumerate(pieces)}
    index = piece_to_index[piece]
    arr[index] = 1
    return arr

def encode_board(board):
    board_str = str(board)
    board_str = board_str.replace(' ', '')
    board_list = []
    for row in board_str.split('\n'):
        row_list = []
        for piece in row:
            row_list.append(encode_piece(piece))
        board_list.append(row_list)
    return np.array(board_list)

def find_best_move(fen):
    board = chess.Board(fen=fen)
    moves = []
    inputs = []

    for move in board.legal_moves:
        dummy_board = board.copy()
        dummy_board.push(move)
        moves.append(move)
        inputs.append(encode_board(dummy_board))

    inputs = np.stack(inputs)

    scores = model.predict(inputs, verbose=0)

    if(board.turn == chess.BLACK):
        index_of_best_move = np.argmax(scores)
    else:
        index_of_best_move = np.argmax(-scores)

    best_move = moves[index_of_best_move]

    return str(best_move)

if __name__ == "__main__":
    fen = sys.argv[1]
    best_move = find_best_move(fen)
    print(best_move)
