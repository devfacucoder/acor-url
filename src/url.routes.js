import { Router } from "express";
import { nanoid } from "nanoid";
const urlRoutes = Router();
import urlModel from "./url.model.js";
urlRoutes.post("/sendurl", async (req, res) => {
  try {
    const { urlss } = req.body;
    const urlDB = await urlModel.create({
      urlOrignal: urlss,
      ideUrlDb: nanoid(5),
    });
    res
      .status(200)
      .json({ mensage: process.env.BASE_URL + "/" + urlDB.ideUrlDb });
  } catch (error) {
    res.status(500).json({ mensage: "error de algo" });
    console.log(error);
  }
});
urlRoutes.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const urlOri = await urlModel.findOne({ ideUrlDb: id });
    
    res.redirect(urlOri.urlOrignal)


  } catch (error) {
    res.status(500).json({ mensage: "error en algo" });
    console.log(error);
  }
});
export default urlRoutes;
