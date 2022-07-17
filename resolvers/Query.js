const {categories, products} = require('../db')

exports.Query = {
    hello: (parent, args, context) => {
        return ["Hello", "my", "Friend"]
    },
    products: (parent, args, context) => {
        return products
    },
    product: (parent, args, context) => {
        const { id } = args

        const product = products.find(product => product.id === id)
            // if (!product) return null;
            // return product
    },
    categories: () => categories,
    category: (parent, args, context) => {
        const { id } = args
        return categories.find((category) => category.id === id)
    }
}

