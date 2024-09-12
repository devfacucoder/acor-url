import express from "express"; // Corrección de "epxress" a "express"
import { customAlphabet } from "nanoid";
import mongoose from "./src/db.js"; // Asegúrate de que este archivo esté correctamente configurado
import urlRoutes from "./src/url.routes.js";
const app = express();
app.use(express.json());
app.use("/", urlRoutes);
// Definir el puerto correctamente
const PORT = process.env.PORT || 3000;

app.post("/sendurl", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Servidor abierto en el puerto ${PORT}`);
});
