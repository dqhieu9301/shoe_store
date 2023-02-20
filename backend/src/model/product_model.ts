import mongoose from "mongoose";

const Schema= mongoose.Schema;
const product = new Schema({
  name: { type: String, require: true },
  quantity: { type: Number, require: true, minimum: 0},
  cost: { type: Number, require: true, minimum: 0 },
  status: { type: Number, require: true },
  discount: { type: Number, require: true },
  shoeBrand: { type: String, require: true },
  pathImage: { type: String, require: true }
}, {
  collection: 'product',
  versionKey: false
});

product.set('toJSON', {
  virtuals: true,
});
  
const productModel = mongoose.model("product", product);
  
export { productModel };