// const args = process.argv.slice(2).map(Number); // Obtiene los argumentos y los convierte en números
// if (args.length === 2) {
//     posibilites(args);
// } else {
//     console.log("Debes proporcionar exactamente dos números.");
// }


function knightMoves(coords1,coords2){
if (!coordIsValid(coords1) || !coordIsValid(coords2))
    return;

let visitedCords=[coords1];
}
function diffCords(coords1,coords2){
let coordsX=coords2[0]-coords1[0];
let coordsY=coords2[1]-coords1[1];
return [coordsX,coordsY];
}
function move(coords1,coords2){
    let init=posibilites(coords1);
    let nearbyCoods=posibilites(coords2); 
    let diff=diffCords(coords1,coords2);
    let maxMoves=0;
    let bestMove=[];
    if (diff[0]>diff[1]){
        maxMoves=Math.round(diff[0]/2);
    }else{
        maxMoves=Math.round(diff[1]/2);
    }
    nearbyCoods.forEach((posibleCoord)=>{
        let diffPosibilityCord=diffCords(posibleCoord,coords2);
        if (coords2[0]>diffPosibilityCord[0] && coords2[1]>diffPosibilityCord[1]){

            bestMove.push(posibleCoord);
        }
        if(coords2[0]<diffPosibilityCord[0] && coords2[1]<diffPosibilityCord[1])
        { bestMove.push(posibleCoord);}
        }
    );
    return bestMove;
}
function coordIsValid(coords){
    if (coords[0] >= 0 && coords[0] <= 7 && 
        coords[1] >= 0 && coords[1] <= 7) {
        return true;
    }
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
    return posibiliteCords;
    
    }
console.log();
console.log(move([2,2],[1,0]));
