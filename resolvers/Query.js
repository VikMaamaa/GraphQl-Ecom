const {categories, products, reviews} = require('../db')

exports.Query = {
    hello: (parent, args, context) => {
        return ["Hello", "my", "Friend"]
    },
    products: (parent, {filter}, {products}) => {
        let filteredProducts = products

        if(filter) {
            const {onSale, avgRating} = filter
            if(onSale) {
                filteredProducts = filteredProducts.filter(product => {
                    return product.onSale
                })
            }

            if([1,2,3,4,5].includes(avgRating)){
                console.log('inside')
                filteredProducts = filteredProducts.filter((product)=> {
                    let sumRating = 0;
                    let numberOfReviews = 0
                    reviews.forEach(review => {
                        if(review.productId === product.id) {
                            sumRating += review.rating
                            numberOfReviews++
                        }
                    })
                    const avgProductRating = sumRating/ numberOfReviews
                    
                    return avgProductRating >= avgRating
                    console.log(sumRating, product.name)
                })
            }
        }

        return filteredProducts
    },
    product: (parent, {id},  {products}) => {
        // const { id } = args

        const product = products.find(product => product.id === id)
            // if (!product) return null;
         return product
    },
    categories: (parent, args, {categories}) => categories,
    category: (parent, {id}, context) => {
        // const { id } = args
        return categories.find((category) => category.id === id)
    }
}

