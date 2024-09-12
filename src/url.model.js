import { model, Schema } from "mongoose";

const urlSchema = new Schema({
  urlOrignal: String,
  ideUrlDb: String,
});
const urlModel = model("urls", urlSchema);
export default urlModel;
