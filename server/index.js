import express from "express"
import mongoose from "mongoose"
mongoose.set('strictQuery', false)
import dotenv from "dotenv";
import userRoutes from "./routes/users.js"
import commentRoutes from "./routes/comments.js"
import videoRoutes from "./routes/videos.js"
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser"

const app = express()
dotenv.config()

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to db & Listeneing on port", process.env.PORT)
        })
    })
    .catch((err) => {
    throw err;
});

//cookie
app.use(cookieParser())
app.use(express.json())
//Routes
app.use("/api/users", userRoutes)
app.use("/api/videos", videoRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/auth", authRoutes)

app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || "Something went wrong!"
    return res.status(status).json({
        success:false,
        status,
        message
    })
})