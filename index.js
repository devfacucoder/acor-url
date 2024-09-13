import express from "express";
import mongoose from "./src/db.js";
import urlRoutes from "./src/url.routes.js";
import cors from "cors";
import { config } from "dotenv";

config();

const app = express();

// Lista de orígenes permitidos
const allowedOrigins = [process.env.FRONTEND_URL];

// Opciones de CORS
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  // Permitir solicitudes de preflight para métodos y encabezados personalizados
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 204 // algunos navegadores antiguos fallan en 204 con CORS
};

// Aplicar middleware de CORS a todas las rutas
app.use(cors(corsOptions));

// Middleware para parsear JSON
app.use(express.json());

// Aplicar las rutas
app.use("/", urlRoutes);

// Definir el puerto correctamente
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor abierto en el puerto ${PORT}`);
});
