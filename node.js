export default class Node {
    constructor(coords, parent=null){
        this.coords=coords;
        this.posibilitiesCoords=[];
        this.parent= parent; //Nodo padre de donde vino
    }
    addPosibilities(data){
        this.posibilitiesCoords=data;
    }
    getPath(){
        let path=[];
        let current=this;
        while (current){
            path.push(current.coords);
            current= current.parent;
        }
        return path.reverse();
    }
}

