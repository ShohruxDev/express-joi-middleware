
import JWT from "jsonwebtoken";
import express from "express";
import { userMiddleware } from "./middleware/validation.js";
import { checkToken } from "./middleware/checkToken.js";

const PORT = 4545;
const app = express();

app.use(express.json());

app.get("/users", checkToken, (req, res) => {
    res.send("All users");
});

app.post("/users", userMiddleware, (req, res) => {
    return res.status(201).json({
        status: 201,
        message: "User created",
        accessToken: JWT.sign(
            { id: 2, role: "Student" },
            "SHAPTOLI"
        )
    });
});

app.listen(PORT, () => console.log("Server is running"));

