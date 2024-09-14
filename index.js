import express from "express";
import mongoose from "./src/db.js";
import urlRoutes from "./src/url.routes.js";
import cors from "cors";
import { config } from "dotenv";

// Cargar las variables de entorno
config();

const app = express();

// Obtenemos la URL del frontend desde las variables de entorno
const allowedOrigins = [process.env.FRONTEND_URL,"https://devfacucoder.github.io/acortador-url/"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      // Permitir si el origen está en la lista de permitidos o si es una solicitud sin origen (como Postman)
      callback(null, true);
      
    } else {
      // Bloquear si el origen no está permitido
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Permitir cookies o credenciales
};

// Aplicamos las opciones de CORS
app.use(cors(corsOptions));

// Middleware para parsear JSON
app.use(express.json());

// Usamos las rutas
app.use("/", urlRoutes);

// Definimos el puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor abierto en el puerto ${PORT}`);
});
