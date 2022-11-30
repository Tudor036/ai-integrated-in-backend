import { NextFunction, Request, Response } from "express";
import multer from "multer";

export function mediaMiddleware(req: Request, res: Response, next: NextFunction) {
    const upload = multer({ dest: './assets' });

    next();
}