import { Request, Response } from "express";

export function getAiPage(req: Request, res: Response) {
    res.render('ai');
}

export async function predictObject(req: Request, res: Response) {
    console.log('prediction endpoint')
    let aiResponse = {
        name: 'Frog',
        confidence: 0.92939455
    };

    if (aiResponse != undefined) {
        res.status(201).json({
            status: 'success',
            message: 'Prediction generated succesfully',
            data: [aiResponse]
        });
    } else {
        res.status(500).json({
            status: 'failed',
            message: 'Internal server error'
        })
    }

}