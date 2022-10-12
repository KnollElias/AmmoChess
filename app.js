// Create And/Or Clear the Chess Board
function createBoard() {

    const gridHeight = 10;
    const gridWidth = 5;
    var gridCount = (gridHeight * gridWidth);

    var blackIsGood = false;

    // Generate Grid
    {
        localCount = 0;
        for (let i = 0; i < gridCount; i++) {
            blackIsGood = !blackIsGood
            document.getElementById("chess-board").innerHTML += `<div id="${localCount}" class="${blackIsGood ? "blackGrid" : "whiteGrid"}"><div>`;
        }
    }
}

createBoard();
