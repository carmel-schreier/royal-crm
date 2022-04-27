const products = [];

const newProducts = process.argv.slice(2);

function addProduct(product) {

    let productObj = {
        name: product,
        id: `${product[0]}${product[product.length-1]}${product[0]}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`
    };
    products.push(productObj);
    return products;
}
if (!newProducts || newProducts.length === 0)
    throw ("Error: no product has been passed");
else {
    for (let i = 0; i < newProducts.length; i++) {
        addProduct(newProducts[i]);
    }
}
products.forEach(product => {
    console.log(`OK. product: ${product.name} with id: ${product.id}`);
})