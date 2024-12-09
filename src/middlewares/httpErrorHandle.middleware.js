// httpErrorHandle.middleware.js
import { HttpError } from "../utils/httpError.util.js";
import { logger } from "../utils/logger.util.js";

const httpErrorHandle = (error, req, res, next) => {
    console.log(error);
    logger.error(error.message)

    if (error instanceof HttpError) {
        return res.status(error.code || 500).json({ message: error.message });
    }

    // Si no es un error de HttpError, retornamos un error genérico del servidor.
    res.status(500).json({ error: "Internal Server Error" });
};

export const errorMiddleware = httpErrorHandle;