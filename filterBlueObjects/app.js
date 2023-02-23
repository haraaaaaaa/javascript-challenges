const objects = [
    {name: "Lopta", color: "red"},
    {name: "Stol", color: "blue"},
    {name: "Daska", color: "blue"},
    {name: "Pernica", color: "white"},
    {name: "Olovka", color: "pink"}
];

function filterBlueObjects(objects){

    let filteredObjects = [];

    for(let i = 0; i < objects.length; i++){
        if(objects[i].color == "blue")
            filteredObjects.push(objects[i])
    }
    
    return filteredObjects;
}

const blueObjects = filterBlueObjects(objects);
console.log(blueObjects);