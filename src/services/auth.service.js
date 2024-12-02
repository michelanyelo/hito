import { userService } from "./user.service.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const loginWithEmailAndPassword = async (email, password) => {
    const users = await userService.getAllUsers()
    // Verificar que el usuario exista
    const user = users.find(item => item.email === email)

    if (!user) {
        throw new Error('User not found')// Si no existe el usuario, lanzar un error
    }

    // Comparar los hash de contraseñas
    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
        throw new Error('Invalid password') // Si la contraseña no es válida, lanzar un error
    }

    // Generar el json webtoken
    const token = jwt.sign({ email: user.email }, "secret", {
        expiresIn: "1h"
    })

    console.log(token)
    return token
}

export const authService = {
    loginWithEmailAndPassword
}