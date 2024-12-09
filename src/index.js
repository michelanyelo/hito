import express from "express";
import albumRoute from "./routes/album.route.js";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import { verifyToken } from "./middlewares/jwt.middleware.js";

const app = express();
const port = process.env.PORT || 3000;

// Habilitar request body
app.use(express.json());

// Rutas protegidas (requieren autenticación)
// Rutas privadas (requieren token)
app.use("/api/users", verifyToken, userRoute);

// Rutas públicas (no requieren token)
app.use("/api/albums", albumRoute); // Ruta pública para ver álbumes
app.use("/api/auth", authRoute); // Ruta pública para login/registro

// Levantar Servidor
app.listen(port, () => {
    console.log(`Servidor levantado en el puerto ${port}`);
});
