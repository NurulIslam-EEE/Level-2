import { db } from "../../db.js";
export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent, args, context) => {
            // console.log(parent, args, context);
            const result = db.products.find((pd) => pd.id === args.productId);
            return result;
        },
        categories: () => db.categories,
        category: (parent, args, context) => {
            const res = db.categories.find((id) => id.id === args.categoryId);
            return res;
        },
    },
    Product: {
        category: (parent, arg, context) => {
            const res = db.categories.find((category) => category.id === parent.categoryId);
            return res;
        },
        reviews: (parent, args, context) => {
            return db.reviews.filter((review) => review.productId === parent.id);
        },
    },
    Category: {
        products: (parent, args, context) => {
            const res = db.products.filter((product) => product.categoryId === parent.id);
            return res;
        },
    },
};
