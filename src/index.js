import app from "./app.js";

const port = process.env.PORT || 3000;

// Levantar servidor
app.listen(port, () => {
    console.log(`Servidor levantado en el puerto ${port}`);
});
