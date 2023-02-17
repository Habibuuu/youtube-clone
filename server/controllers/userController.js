import { createError } from "../error.js"
import User from "../models/UserModel.js"

export const update = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id, {
                    $set:req.body,
                }, 
                {new: true}
            )
            res.status(200).json(updatedUser)
        } catch (err) {
            next(err)
        }
    }else{
        return next (createError(403, "You can update for your account!"))
    }
}

export const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            await User.findOneAndDelete(
                req.params.id,
            )
            res.status(200).json("User has been deleted")
        } catch (err) {
            next(err)
        }
    }else{
        return next (createError(403, "You can delete for your account!"))
    }
}

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id)
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}

export const subscribe = async (req, res, next) => {
    try {
        //add subscribed user
        await User.findById(
            req.body.id, {
                $push: {subscribedUsers: req.params.id},
            }
        )
        //remove subcribers
        await User.findByIdAndUpdate(
            req.params.id, {
                $inc: { subscribers: 1 },
            }
        )
        res.status(200).json("Subscribtion successfull.")
    } catch (err) {
        next(err)
    }
}

export const unsubscribe = async (req, res, next) => {
    try {
        try {
            //remove subscribed user
            await User.findById(
                req.body.id, {
                    $pull: {subscribedUsers: req.params.id},
                }
            )
            //remove subcribers
            await User.findByIdAndUpdate(
                req.params.id, {
                    $inc: { subscribers: -1 },
                }
            )
            res.status(200).json("Unsubscribtion successfull.")
        } catch (err) {
            next(err)
        }
    } catch (err) {
        next(err)
    }
}

export const like = (req, res, next) => {
    
}

export const dislike = (req, res, next) => {
    
}