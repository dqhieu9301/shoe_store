import mongoose from "mongoose";

const Schema = mongoose.Schema;
const accountAdmin = new Schema({
  username: {type: String,require: true},
  password: {type: String,require: true}
}, {
  collection: 'accountAdmin',
  versionKey: false
});

accountAdmin.set('toJSON', {
  virtuals: true,
});

const accountAdminModel = mongoose.model("accountAdmin", accountAdmin);

export { accountAdminModel };