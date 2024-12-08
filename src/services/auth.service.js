import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { UserModel } from "../models/user.model.js"

const isValidPassword = async (enteredPassword, storedPasswordHash) => {
    // Compara la contraseña ingresada con el hash almacenado
    return bcrypt.compare(enteredPassword, storedPasswordHash)
}

const loginWithEmailAndPassword = async (email, password) => {
    // Encuentra al usuario por su correo electrónico
    const user = await UserModel.findOneByEmail(email)

    if (!user) {
        throw new Error("Invalid credentials")
    }

    // Valida la contraseña ingresada
    const isPasswordValid = await isValidPassword(password, user.password)  // user.password es el hash

    if (!isPasswordValid) {
        throw new Error("Invalid credentials")
    }

    // Si la contraseña es válida, genera el token
    const token = jwt.sign(
        { email: user.email, id: user.id },  // Incluye el 'uid' en el payload
        "secret",  // Clave secreta para firmar el token
        { expiresIn: "1h" }  // Establece una expiración de 1 hora para el token
    )

    return token
}

const createUserWithEmailAndPassword = async (email, password) => {
    const user = await UserModel.findOneByEmail(email)

    if (user) throw new HttpError("User already exists", 409)

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const userCreated = await UserModel.create(email, hashedPassword)

    return userCreated
}

export const authService = {
    loginWithEmailAndPassword,
    createUserWithEmailAndPassword
}