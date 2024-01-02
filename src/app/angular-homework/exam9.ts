type Product = {
    id: number,
    name: string,
    price: number,
    quantity: number
}

const productList: Product[] = [
    {
        id: 1,
        name: "test",
        price: 100,
        quantity: 10
    },
    {
        id: 1,
        name: "test1",
        price: 110,
        quantity: 10
    },
    {
        id: 1,
        name: "test2",
        price: 120,
        quantity: 10
    },
    {
        id: 1,
        name: "test3",
        price: 130,
        quantity: 10
    },
    {
        id: 1,
        name: "test4",
        price: 140,
        quantity: 10
    }
]

const totalPrice = productList.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity),0)

console.log('Total Price: ' + totalPrice)

//
const filterPrice = productList.filter((product) => product.price > 100)

console.log("The list products have price equal 100: " + filterPrice)

//
const mapProduct = productList.map((product) => 'San pham ' + product.name + ' co gia ' + product.price + ' va con ' + product.quantity + ' san pham')

console.log(mapProduct)

//
const totalQuantity = productList.reduce((accumulator, currentValue) => accumulator + currentValue.quantity,0)

console.log('Total Quantity: ' + totalQuantity)

//
const discountPoduct = (product: Product[], discount: number) => {
    return product.map((product) => ({
        ...product,
        price: product.price - discount // for discount %: product.price - (product.price * (discount / 100))
    }))
}

console.log(discountPoduct(productList, 10))