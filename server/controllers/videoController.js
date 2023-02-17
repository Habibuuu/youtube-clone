import { createError } from "../error.js"
import UserModel from "../models/UserModel.js"
import Video from "../models/VideoModel.js"

export const addVideo = async (req, res, next) => {
    const newVideo = new Video({ userId: req.user.id, ...req.body })
    try {
        const savedVideo = await newVideo.save()
        res.status(200).json(savedVideo)
    } catch (err) {
        next(err)
    }
}

export const updateVideo = async (req, res, next) => {
    
    try {
        //get video
        const video = await Video.findById(req.params.id)
        //not found video
        if(!video) return next(createError(404, "Video not found!"))
        //found video
        if(req.user.id === video.userId) {
            const updatedvideo = await Video.findByIdAndUpdate(
                req.params.id, {
                    $set: req.body,
                },
                { new: true }
            )
            res.status(200).json(updatedvideo)
        } else {
            return next(createError(403, "You can update only your video!"))
        }
    } catch (err) {
        next(err)
    }
}

export const deleteVideo = async (req, res, next) => {
    
    try {
        //get video
        const video = await Video.findById(req.params.id)
        //not found video
        if(!video) return next(createError(404, "Video not found!"))
        //found video
        if(req.user.id === video.userId) {
            await Video.findByIdAndDelete(
                req.params.id
            )
            res.status(200).json("The video has been deleted.")
        } else {
            return next(createError(403, "You can delete only your video!"))
        }
    } catch (err) {
        next(err)
    }
}

export const getVideo = async (req, res, next) => {
    
    try {
        const video = Video.findById(req.params.id)
        res.status(200).json(video)
    } catch (err) {
        next(err)
    }
}

export const addView = async (req, res, next) => {
    
    try {
        
    } catch (error) {
        
    }
}

export const trend = async (req, res, next) => {
    
    try {
        
    } catch (error) {
        
    }
}

export const random = async (req, res, next) => {
    
    try {
        
    } catch (error) {
        
    }
}

export const sub = async (req, res, next) => {
    
    try {
        
    } catch (error) {
        
    }
}

export const getByTag = async (req, res, next) => {
    
    try {
        
    } catch (error) {
        
    }
}

export const search = async (req, res, next) => {
    
    try {
        
    } catch (error) {
        
    }
}