import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cartProduct = new Schema({

}, {
  collection: 'cartProduct',
  versionKey: false
});

cartProduct.set('toJSON', {
  virtuals: true,
});
    
const cartProductModel = mongoose.model("cartProduct", cartProduct);
    
export { cartProductModel };