import express from "express"
import albumRoute from "./routes/album.route.js"
import userRoute from "./routes/user.route.js"
import authRoute from "./routes/auth.route.js"

const app = express()
const port = process.env.PORT || 3000

// Habilitar request body
app.use(express.json())

// Habilitar rutas publicas/protegidas

// Ruta privada (leer todos los usuarios)
app.use("/api/users", userRoute)

// Ruta pública (leer todos los albums) 
app.use("/api/albums", albumRoute)

// Ruta pública (loguearse/registrarse)
app.use("/api/auth", authRoute)

// Levantar Servidor
app.listen(port, () => {
    console.log(`Servidor levantado en el puerto ${port}`)
})
