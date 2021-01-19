import { useEffect, useState } from "react";
import { handleTicks } from "./utils";
import './tictactoe.css';
import { connect } from "react-redux";

import {addGame, removeGame} from '../../../redux/progress/actionCreator';

const Tictactoe = ({addGame,removeGame,name,games}) =>{
    const [isStarted,setIsStarted]= useState(false);
    const [pl1Input,setPl1Input] = useState("");
    const [pl2Input,setPl2Input] = useState("");
    const [currPlayer,setCurrPlayer] = useState(1);
    const [board,setBoard] = useState(new Array(3).fill("").map(() => new Array(3).fill("")));
    const [isPlayed, setIsPlayed] = useState(false);
    
    useEffect(()=>{
        games.forEach(game=>{
            if(game.title===name){
                setIsPlayed(true);
            }
        });
    },[]);

    const handlePlayed = () =>{
        if(isPlayed){
            removeGame(name);
        }
        else{
            console.log("add game before");
            addGame({title: "TicTacToe"});
            console.log(games);
        }
        setIsPlayed(prevState => !prevState);
    }

    return (
        <div className="game-container flex" >
            <button className="played" onClick={handlePlayed}>{isPlayed? "Played" : "Not Played" }</button>
            <h3 style={{margin: "5px"}}>Tic Tac Toe</h3>
            <div className="game flex">
                {!isStarted ? <>
                    <div>player1: <input value={pl1Input} onChange={(event)=>setPl1Input(event.target.value)} /></div>
                    <div>player2: <input value={pl2Input} onChange={(event)=>setPl2Input(event.target.value)} /></div>
                    <button onClick={()=> setIsStarted(true)} >Start</button>
                </> : <>
                    <button onClick={()=>setIsStarted(false)} className="exit" >Exit</button>
                    <div>{currPlayer===1? pl1Input : pl2Input}'s turn</div>
                    {board.map((row,i)=> <div className="row" >
                        {row.map((cell,j)=> <div className="cell flex" onClick={()=>handleTicks(i,j,board,setBoard,currPlayer,setCurrPlayer)} >{cell}</div>)}
                    </div>)}
                    {/* <button onClick={()=> setCurrPlayer(old=> old===1? 2 : 1)} >next</button> */}
                </>}
            </div>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {
        games: state.progressReducer.games
    }
}

export default connect(mapStateToProps,{
    addGame,
    removeGame
})(Tictactoe);