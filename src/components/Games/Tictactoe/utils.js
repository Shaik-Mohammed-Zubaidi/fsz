export const handleTicks = (i,j,board,setBoard) => {
    let boardCopy= [...board];
    boardCopy[i][j]= "X";
    setBoard(boardCopy);
    return;
}

