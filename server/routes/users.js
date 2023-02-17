import express from "express"
import { deleteUser, dislike, getUser, like, subscribe, unsubscribe, update } from "../controllers/userController.js"
import { verifyToken } from "../middleware/verifyToken.js"

const router = express.Router()

//Update user
router.put("/:id", verifyToken, update)

//Delete user
router.delete("/:id", verifyToken, deleteUser)

//Get a user
router.get("/find/:id", getUser)

//Subscribe a user
router.put("/sub/:id", verifyToken, subscribe)

//Unsubscribe a user
router.put("unsub/:id", verifyToken, unsubscribe)

//Like a video
router.put("/like/:id", verifyToken, like)

//Dislike a video
router.put("dislike/:id", verifyToken, dislike)

export default router