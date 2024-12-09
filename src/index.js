import express from "express";
import albumRoute from "./routes/album.route.js";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

const app = express();
const port = process.env.PORT || 3000;

// Habilitar request body
app.use(express.json());

// Rutas protegidas (requieren token)
app.use("/api/users", userRoute); // La protección está dentro de las rutas de usuario

// Rutas públicas (no requieren token)
app.use("/api/albums", albumRoute); // Algunas rutas son públicas, otras protegidas
app.use("/api/auth", authRoute); // Rutas para login/registro público

// Middleware de manejo de errores
app.use((error, req, res, next) => {
    console.error(error.message);
    res.status(error.status || 500).json({ message: error.message });
});

// Levantar servidor
app.listen(port, () => {
    console.log(`Servidor levantado en el puerto ${port}`);
});
