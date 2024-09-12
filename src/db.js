import mongoose from "mongoose";
import { config } from "dotenv";
config();
mongoose.connect(process.env.URLMONGODB)
  .then(() => console.log("base de datos conectada"))
  .catch((err) => console.error(err));

export default mongoose;
