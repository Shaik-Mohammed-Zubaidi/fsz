import Hangman from "./Hangman/Hangman";
import Tictactoe from "./Tictactoe/Tictactoe";
import './games.css';

const Games = () =>{
    return (
        <div className="games-container" >
            <Tictactoe />
            <Tictactoe />
            <Tictactoe />
            <Tictactoe />
            <Tictactoe />
            <Tictactoe />
            <Tictactoe />
            <Hangman />
        </div>
    );
};

export default Games;