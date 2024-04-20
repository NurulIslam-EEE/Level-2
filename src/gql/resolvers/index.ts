import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, args: { productId: string }, context: any) => {
      // console.log(parent, args, context);
      const result = db.products.find((pd) => pd.id === args.productId);
      return result;
    },
  },
};