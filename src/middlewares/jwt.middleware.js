import jwt from "jsonwebtoken"

export const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        res.status(401).json({ message: 'No token provided' })
        return
    }

    const token = authHeader.split(" ")[1]

    try {
        const payload = jwt.verify(token, "secret")

        req.email = payload.email
        next()
    } catch (error) {
        console.error(error);
        res.status(403).json({ message: 'Invalid token' })
    }
}