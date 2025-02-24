
function knightMoves(coords1,coords2){
if (!coordIsvalid(coords1) || !coordIsvalid(coords2))
    return;




}

function coordIsValid(coords){
    if (coords[0] >= 0 && coords[0] <= 7 && 
        coords[1] >= 0 && coords[1] <= 7) {
        return true;
    }
    console.log("Invalid", coords);
    return false;
}
function posibilites(coords1){
    let posibiliteCords=[];
    let moves=[
        [2,1],
        [2,-1],

        [1,2],
        [1,-2],

        [-2,1],
        [-2,-1],

        [-1,2],
        [-1,-2]
    ];
    moves.forEach((move)=>{
        let newX = coords1[0] + move[0];
        let newY = coords1[1] + move[1];
        if (coordIsValid([newX,newY])) {
            posibiliteCords.push([newX,newY]);
        };
    });
    console.log(posibiliteCords);
}
console.log(posibilites([2,1]));