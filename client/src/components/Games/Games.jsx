import Hangman from "./Hangman/Hangman";
import Tictactoe from "./Tictactoe/Tictactoe";
import './games.css';

const Games = () =>{
    return (
        <div className="games-container" >
            {[1,2,3,4,5,6,7,8,9].map(val=> <Tictactoe key={"ttt"+val} id={"g"+val} />)}
            {[1,2,3,4,5,6,7,8,9].map(val=> <Hangman key={"hm"+val} id={"g"+val} />)}
        </div>
    );
};

export default Games;