import { useState } from 'react';
import './hangman.css';

const Hangman = () =>{
    const [isStarted,setIsStarted]= useState(false);
    const [pl1Input,setPl1Input] = useState("");
    const [pl2Input,setPl2Input] = useState("");
    const [currPlayer,setCurrPlayer] = useState(1);

    return (
        <div className="game-container flex" >
            <h3 style={{margin: "5px"}}>Tic Tac Toe</h3>
            <div className="game flex">
                {!isStarted ? <>
                    <div>player1: <input value={pl1Input} onChange={(event)=>setPl1Input(event.target.value)} /></div>
                    <div>player2: <input value={pl2Input} onChange={(event)=>setPl2Input(event.target.value)} /></div>
                    <button onClick={()=> setIsStarted(true)} >Start</button>
                </> : <>
                    <button onClick={()=>setIsStarted(false)} className="exit" >Exit</button>
                    <div>{currPlayer===1? pl1Input : pl2Input}'s turn</div>
                    <button onClick={()=> setCurrPlayer(old=> old===1? 2 : 1)} >next</button>
                </>}
            </div>
        </div>
    );
};

export default Hangman;