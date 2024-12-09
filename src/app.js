import express from "express";
import albumRoute from "./routes/album.route.js";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import { errorMiddleware } from "./middlewares/httpErrorHandle.middleware.js"

const app = express();

// Habilitar request body
app.use(express.json());

// Rutas protegidas (requieren token)
app.use("/api/users", userRoute); // La protección está dentro de las rutas de usuario

// Rutas públicas (no requieren token)
app.use("/api/albums", albumRoute); // Algunas rutas son públicas, otras protegidas
app.use("/api/auth", authRoute); // Rutas para login/registro público

app.use(errorMiddleware)

// Exportar la app para pruebas
export default app;