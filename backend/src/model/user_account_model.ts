/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from "mongoose";

const Schema = mongoose.Schema;
const accountUser = new Schema({
  username: {type: String,require: true},
  password: {type: String,require: true}
}, {
  collection: 'account',
  versionKey: false,
  id: true,
  toJSON: {
    transform(doc, ret){
      ret.id = ret._id;
      delete ret._id;
    }
  }
});

accountUser.set('toJSON', {
  virtuals: true,
});

const accountModel = mongoose.model("account", accountUser);

export { accountModel };