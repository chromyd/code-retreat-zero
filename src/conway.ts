interface cell{
    x: number;
    y: number;
}

function isNeighbor(c1:cell, c2:cell) : boolean {

    if(c1.x == c2.x && c1.y == c2.y){
        return false
    }
    else{
        return Math.abs(c1.x - c2.x ) <= 1 && Math.abs(c1.y - c2.y) <= 1

    }
}
function countNeighbors(c1:cell,list_of_cells:cell[]){
    return list_of_cells.filter(c => isNeighbor(c,c1)).length
}

function resurrectNeighbors(cells: cell[]) : cell[] {
    const deadCells = cells.flatMap(c => [
        {x:c.x-1, y:c.y-1},{x:c.x, y:c.y-1},{x:c.x+1, y:c.y-1},
        {x:c.x-1, y:c.y},{x:c.x+1, y:c.y},
        {x:c.x-1, y:c.y+1},{x:c.x, y:c.y+1},{x:c.x+1, y:c.y+1}].filter(c => !cells.includes(c)));
    return [...new Set(deadCells.map(c => JSON.stringify(c)))].map(c=> JSON.parse(c)).filter(c => countNeighbors(c, cells) == 3);
}

export function nextGeneration(cells:cell[]) : cell[] {
    return [... cells.filter(c => countNeighbors(c,cells) == 2 || countNeighbors(c,cells) == 3), ... resurrectNeighbors(cells)]
}