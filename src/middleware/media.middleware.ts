import { NextFunction, Request, Response } from "express";
import { predictObject } from "../controllers/ai.controller";
import { deleteImageFromFileSystem, saveImageInFileSystem } from "../utils/filesystem.utils";

export function beforePrediction(req: Request, res: Response, next: NextFunction) {
    console.log("before prediction middleware");
    saveImageInFileSystem(req.file);
    next();
}

export function predictionHandler(req: Request, res: Response, next: NextFunction) {
    predictObject(req, res);
    next();
}

export function afterPredictionCleanup(req: Request) {
    console.log("after prediction middleware");
    deleteImageFromFileSystem(req.file);
}