import { readFile, writeFile } from "node:fs/promises"
import path from "node:path"

const __dirname = import.meta.dirname
const pathFile = path.resolve(__dirname, "../../data/users.json")

// Lectura de datos
const readUsers = async () => {
    const usersJSON = await readFile(pathFile, "utf-8")
    const users = JSON.parse(usersJSON)
    return users
}

// Escritura de datos
const writeUsers = async (users) => {
    const usersJSON = JSON.stringify(users, null, 2)
    return await writeFile(pathFile, usersJSON)
}

export const UserModel = {
    readUsers,
    writeUsers
}