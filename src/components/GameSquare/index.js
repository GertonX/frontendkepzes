import './style.css';

function GameSquare(  { square, changeImage }) {

    return (
        <div 
        className='game-square' 
        style={ { backgroundImage: 'url(' + square.imageUrl + ')' } }
        onClick={changeImage}
        ></div>
    )
}

export default GameSquare;