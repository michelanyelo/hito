import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Verificar si se proporciona el token
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token provided or invalid format" });
    }

    const token = authHeader.split(" ")[1];

    try {
        // Verificar el token
        const payload = jwt.verify(token, process.env.JWT_SECRET || "secret");

        // Adjuntar datos del token a la solicitud
        req.uid = payload.id;
        req.email = payload.email;

        next(); // Continuar con el siguiente middleware/controlador
    } catch (error) {
        console.error("Error verifying token:", error);
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};
