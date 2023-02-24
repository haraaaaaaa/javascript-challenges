const objects = [
    {name: "Lopta", color: "red"},
    {name: "Stol", color: "blue"},
    {name: "Daska", color: "blue"},
    {name: "Pernica", color: "white"},
    {name: "Olovka", color: "pink"}
];

function filterBlueObjects(objects){
    return objects.filter(object => object.color == "blue")
}

const blueObjects = filterBlueObjects(objects);
console.log(blueObjects);