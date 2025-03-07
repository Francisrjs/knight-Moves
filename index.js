// const args = process.argv.slice(2).map(Number); // Obtiene los argumentos y los convierte en números
// if (args.length === 2) {
//     posibilites(args);
// } else {
//     console.log("Debes proporcionar exactamente dos números.");
// }
import Node from "./node.js";


function knightMoves(start,end){
    if (!coordIsValid(start) || !coordIsValid(end))
        return "coordenadas Invalidas";

    let queque=[new Node(start)];
    let visited= new Set();

    while (queque.length >0){
        let current= queque.shift() //first queque
        if (current.coords[0] == end[0] && current.coords[1] ==end[1]){
            return current.getPath(); // retorno el camino
        }
    
        let moves= posibilites(current.coords);
        moves.forEach((move)=>{
        let moveKey= move.toString();
        if (!visited.has(moveKey)){
            visited.add(moveKey);
            queque.push(new Node(move, current)); // Creamos un nodo hijo con el nodo actual como padre
        }
        });
    }
    return "No hay camino valido";
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
console.log(knightMoves([0, 0], [3, 3]));
