const customers = [];

const username = process.argv.slice(2)
console.log("before " + username)

function addCustomer(username) {
    let userObj = {}
    userObj = {
        name: username,
        password: `${username[0]}${username[username.length-1]}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`
    };
    customers.push(userObj)
    //console.log(customers)

    return customers
}
if (!username || username.length === 0)
    throw ("Error: no user has been passed")
else {
    for (let i = 0; i < username.length; i++) {
        addCustomer(username[i]);
        //console.log(`OK. username:${customers[i].name} with temporary password: ${customers[i].password}`)
    }
}
customers.forEach(customer => {
    console.log(`OK. username: ${customer.name} with temporary password: ${customer.password}`)
})