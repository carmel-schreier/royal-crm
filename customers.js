const customers = [];

const username = process.argv.slice(2);

function addCustomer(username) {
    let userObj = {}
    userObj = {
        name: username,
        password: `${username[0]}${username[username.length-1]}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`
    };
    customers.push(userObj);
    return customers;
}
if (!username || username.length === 0)
    throw ("Error: no user has been passed");
else {
    for (let i = 0; i < username.length; i++) {
        addCustomer(username[i]);
    }
}
customers.forEach(customer => {
    console.log(`OK. username: ${customer.name} with temporary password: ${customer.password}`);
})