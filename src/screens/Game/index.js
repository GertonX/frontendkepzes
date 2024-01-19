import './style.css';
import './animation.css';
import GameSquare from '../../components/GameSquare';
import { useEffect, useState } from 'react';

function Game() {

    const gameSquares = [
        {imageUrl: '/img/destiny.jpg'},
        {imageUrl: '/img/crab.jpg'},
        {imageUrl: '/img/highground.jpg'},
        {imageUrl: '/img/dark-sign.jpg'},
        {imageUrl: '/img/destiny.jpg'},
        {imageUrl: '/img/crab.jpg'},
        {imageUrl: '/img/highground.jpg'},
        {imageUrl: '/img/dark-sign.jpg'},
        {imageUrl: '/img/destiny.jpg'},
        {imageUrl: '/img/crab.jpg'},
        {imageUrl: '/img/highground.jpg'},
        {imageUrl: '/img/dark-sign.jpg'},
        {imageUrl: '/img/destiny.jpg'},
        {imageUrl: '/img/crab.jpg'},
        {imageUrl: '/img/highground.jpg'},
        {imageUrl: '/img/dark-sign.jpg'}
    ];

    const [gameSquaresByRow, setGameSquaresByRow] = useState([]); //useState frissíti az oldalt ha változás történt

    const [wonGame, setWonGame] = useState(true);

    const groupSquaresToRows = () => {
        let rows = [
            [],
            [],
            [],
            []
        ];

        gameSquares.forEach((square, squareIndex) => {
            if (squareIndex >= 0 && squareIndex < 4) {
                rows[0] = [...rows[0], square];
            }
            if (squareIndex >= 4 && squareIndex < 8) {
                rows[1] = [...rows[1], square];
            }
            if (squareIndex >= 8 && squareIndex < 12) {
                rows[2] = [...rows[2], square];
            }
            if (squareIndex >= 12 && squareIndex < 16) {
                rows[3] = [...rows[3], square];
            }

        });

        console.log(rows);

        setGameSquaresByRow(rows);
    };

    if(gameSquaresByRow.length < 1 )
        groupSquaresToRows();

    const availableImages = [
        '/img/destiny.jpg',
        '/img/crab.jpg',
        '/img/highground.jpg',
        '/img/dark-sign.jpg'
    ];

    const getRandomImageIndex = () => {
        return Math.floor(Math.random() * availableImages.length);
    };

    const changeSquareImg = (rowIndex, squareIndex) => {
        console.log(rowIndex, squareIndex);
        const newSquares = [...gameSquaresByRow];   // lemásolja az adott tömb tulajdonnságait
        newSquares[rowIndex][squareIndex] = { imageUrl: availableImages[getRandomImageIndex()]};
        setGameSquaresByRow(newSquares);
    };

    const checkGameState = () => {
        let won = true;
        const selectedImage = availableImages[3];

        gameSquaresByRow.forEach(row => {
            row.forEach(square => {
               if (square.imageUrl !== selectedImage)
               {
                won = false;
               } 
            });
        });

        setWonGame(won);
    };

    useEffect( () => {
        //checkGameState();
    });

    return (
        <section id="game" style={ { backgroundImage: 'url(/img/mountain.jpg)' } }>
        <h1 className='headline'>
            Nyereményjáték
        </h1>

        <h3 className='game-state'>
            { wonGame ? 'Nyert' : 'Nem nyert' } 
            <div class="firework"></div>
            <div class="firework"></div>
            <div class="firework"></div>
        </h3>

        { wonGame ?
        <div className='won-wrapper'>
            <div className='won-circle'>
                <h3 className='won-circle-text'>
                    Nyert
                </h3>
            </div>
        </div>
        :
            <div className='game-area'>
                { gameSquaresByRow.map((row, rowIndex) =>
                    <div className='row'>
                        { row.map((square, squareIndex) =>
                            <GameSquare 
                                square={square} 
                                changeImage={() => changeSquareImg(rowIndex, squareIndex)} 
                            /> 
                        )}
                    </div>
                )}     
            </div>
        }  
        </section>
        
    )
}

export default Game;