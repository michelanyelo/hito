import { UserModel } from "../models/user.model.js";
import { HttpError } from "../utils/httpError.util.js";  // Asegúrate de que tienes esta clase HttpError definida

const getAllUsers = async () => {
    const users = await UserModel.findAll();
    return users;
}

const getUserById = async (id) => {
    const user = await UserModel.findById(id);

    if (!user) throw new HttpError("User not found", 404); // Usuario no encontrado

    return user;
}

const getUserByEmail = async (email) => {
    const user = await UserModel.findOneByEmail(email);

    if (!user) throw new HttpError("User not found", 404); // Usuario no encontrado

    return user;
}

const deleteUserById = async (id) => {
    const user = await UserModel.remove(id);

    if (!user) throw new HttpError("User not found", 404); // Usuario no encontrado

    return user;
}

const updateUserById = async (id, email, password) => {
    const user = await UserModel.update(id, email, password);

    if (!user) throw new HttpError("User not found", 404); // Usuario no encontrado

    return user;
}

export const userService = {
    getAllUsers,
    getUserById,
    getUserByEmail,
    deleteUserById,
    updateUserById
};
