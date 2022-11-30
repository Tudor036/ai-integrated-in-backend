import { Request, Response } from "express";
import classifyImage from "../utils/tensorflow.utils";

export function getAiPage(req: Request, res: Response) {
    res.render('ai');
}

export async function sendPredictionResult(req: Request, res: Response) {
    let aiResponse;

    try {
        aiResponse = await classifyImage(`frog.jpg`);
    } catch(err) {
        console.error(err);
    }
    
    if(aiResponse != undefined) {
        res.status(201).json({
            status: 'success',
            message: 'Prediction generated succesfully',
            data: [ aiResponse ]
        });
    } else {
        res.status(500).json({
            status: 'failed',
            message: 'Internal server error'
        })
    }
    
}

export function uploadPredictionImage(req: Request, res: Response) {
    try {
        const imageFile = req.file;
        
    } catch (err) {

    }
    res.redirect('/ai/generate-prediction');
    // res.status(201).json({
    //     status: 'success',
    //     message: 'Image uploaded succesfully',
    //     data: []
    // });
}