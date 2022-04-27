const orders = [];

let inputOrders = process.argv.slice(2);
console.log("inputOrders: " + inputOrders)

let newOrders = inputOrders.map(order => {
    return Number(order);
});
console.log("newOrders: " + newOrders)

function addOrder(newOrder) {
    if (isNaN(newOrder)) throw ("Error: orders must be specified in numbers");
    let orderObj = {
        quantity: newOrder,
        id: `${newOrder}${newOrder}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`
    };
    orders.push(orderObj);
    return orders
}

if (!newOrders || newOrders.length === 0)
    throw ("Error: no user has been passed");
//else if (typeof newOrders != `number`) throw ("Error: orders must be specified in numbers");
else {
    for (let i = 0; i < newOrders.length; i++) {
        addOrder(newOrders[i]);
    }
};
orders.forEach(order => {
    console.log(`OK. new order: ${order.id}, quantity: ${order.quantity}`);
});