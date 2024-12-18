# Chess Engines

https://chessengines.vercel.app/

Chess Engines is a web application built using Next.js for the frontend and Node.js with Express for the backend. The application features three different chess engines:

1. **Random Chess**: Selects moves randomly.
2. **Stockfish Engine**: Utilizes the Stockfish module and binary file to find the best move.
3. **ML Model**: Uses a TensorFlow Keras trained model to predict the best move.

## Features

- **Next.js** for the frontend.
- **Node.js and Express** for the backend.
- **Python APIs** to interface with different chess engines.
- **Three Modes**:
  - Random Chess: Randomly selects legal moves.
  - Stockfish Engine: Uses the powerful Stockfish chess engine.
  - ML Model: Trained on 60,000 chess positions to predict the best move using TensorFlow Keras.
- **Docker** for containerization.
- **Azure** for deployment.
- **Flask** for the backend API.

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Azure](https://img.shields.io/badge/Microsoft_Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)


## Project Structure

```
.
├── backend
│   ├── chess_random_engine.py
│   ├── stockfish_engine.py
│   ├── ml_model.py
│   ├── server.js
│   └── requirements.txt
├── pages
│   ├── index.js
│   ├── random.js
│   ├── stockfish.js
│   ├── ml-model.js
│   └── _app.js
└── public
    ├── horse.svg
    └── github.png
```


## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd chess-engines
    ```

2. Install dependencies:
    ```sh
    yarn install
    cd backend
    pip install -r requirements.txt
    ```

3. Run the application:
    ```sh
    yarn dev
    ```

4. Set up the backend server:
    ```sh
    cd backend
    node server.js
    ```

## Usage

1. Open the application in your browser.
2. Select one of the modes (Random Chess, Stockfish Engine, ML Model) from the homepage.
3. Play chess and see the best move suggested by the selected engine.

## Deployment

This project is deployed on Vercel. You can access it [here](https://chessengines.vercel.app/).

## Links

- [Link to Jupyter Notebook for ML Model](https://www.kaggle.com/code/adityakumar2003/chess-ai)
- [Backend Repository](https://github.com/hadityakumar/Chess_server_flask)

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any changes.

## Contact

For any inquiries, please reach out to [hadityakumar](https://www.linkedin.com/in/hadityakumar/).

---
