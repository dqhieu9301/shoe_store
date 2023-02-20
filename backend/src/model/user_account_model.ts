import mongoose from "mongoose";

const Schema = mongoose.Schema;
const accountUser = new Schema({
  id: {type: String,require: true},
  username: {type: String,require: true},
  password: {type: String,require: true}
}, {
  collection: 'account',
  versionKey: false
});

accountUser.set('toJSON', {
  virtuals: true,
});

const accountModel = mongoose.model("account", accountUser);

export { accountModel };