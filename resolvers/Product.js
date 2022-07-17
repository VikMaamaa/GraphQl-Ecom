
exports.Product = {
    category: ({categoryId}, args, {categories}) => {
        // console.log(context)
        // const categories = context.categories
        // const categoryId = parent.categoryId;
        return categories.find(category => category.id === categoryId)
    },
    reviews: ({id}, args, {reviews}) => {
        return reviews.filter(review => review.productId === id)
    }
}