import mongoose from "mongoose";

const Schema= mongoose.Schema;
const product = new Schema({
  name: { type: String, require: true },
  quantity: { type: Number, require: true, minimum: 0},
  cost: { type: Number, require: true, minimum: 0 },
  stocking: { type: Boolean, require: true },
  discount: { type: Boolean, require: true },
  shoeBrand: { type: String, require: true },
  status: { type: String, require: true}
}, {
  collection: 'nike_product',
  versionKey: false
});

product.set('toJSON', {
  virtuals: true,
});
  
const productModel = mongoose.model("account", product);
  
export { productModel };