const cart = [
    {title: "Book", quantity: 3, price: 20},
    {title: "TV", quantity: 1, price: 820},
    {title: "Bread", quantity: 1, price: 2},
    {title: "T-Shirt", quantity: 5, price: 10},
    {title: "Socks", quantity: 7, price: 4}
];

function getQuantityOfCartItems(){

    let totalQuantity = 0;

    for(let i = 0; i<cart.length; i++){
        totalQuantity += cart[i].quantity;
    }

    return totalQuantity;
}

function getTotalPriceOfCartItems(){

    let totalPrice = 0;

    for(let i = 0; i<cart.length; i++){
        totalPrice += (cart[i].quantity * cart[i].price);
    }    

    return totalPrice;
}

console.log(getTotalPriceOfCartItems());
console.log(getQuantityOfCartItems());