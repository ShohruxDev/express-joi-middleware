
import JWT from "jsonwebtoken";

export const checkToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        console.log("AUTHORIZATION:", authHeader);

        if (!authHeader) {
            return res.status(401).json({
                status: 401,
                message: "Token yuborilmadi"
            });
        }

        const token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                status: 401,
                message: "Token yuborilmadi"
            });
        }

        const user = JWT.verify(token, "SHAPTOLI");

        if (user.role !== "Admin") {
            return res.status(403).json({
                status: 403,
                message: "Senga mumkin emas"
            });
        }

        req.user = user;
        next();

    } catch (error) {
        return res.status(401).json({
            status: 401,
            message: "Token invalid"
        });
    }
};


 
