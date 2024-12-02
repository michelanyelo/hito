import { nanoid } from "nanoid";
import { UserModel } from "../models/user.model.js";
import bcrypt from "bcryptjs";

const getAllUsers = async () => {
    const users = await UserModel.readUsers()
    return users
}

const createUserWithEmailAndPassword = async (email, password) => {
    const users = await getAllUsers()
    const userExist = users.find(item => item.email === email)

    if (userExist) {
        throw new Error('User already exist')
    }

    // Hashear Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Crear un nuevo usuario
    const newUser = {
        id: nanoid(),
        email,
        password: hashedPassword
    }

    // Agregar el nuevo usuario al json
    users.push(newUser)
    await UserModel.writeUsers(users)
    return newUser
}

export const userService = {
    getAllUsers,
    createUserWithEmailAndPassword
}