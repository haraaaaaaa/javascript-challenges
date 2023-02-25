const objects = [
    {name: "Lopta", color: "red"},
    {name: "Stol", color: "blue"},
    {name: "Daska", color: "blue"},
    {name: "Pernica", color: "white"},
    {name: "Olovka", color: "pink"}
];

const blueObjects = objects.filter(object => object.color == "blue" );
console.log(blueObjects);