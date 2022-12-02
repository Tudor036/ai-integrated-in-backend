import { Router } from "express";
import { getAiPage } from "../controllers/ai.controller";
import { beforePrediction, predictionHandler, afterPredictionCleanup } from '../middleware/media.middleware';
import { upload } from '../config/multer.config';

const router = Router();

router
    .get('/', getAiPage)
    .post(
        '/recognise',
        upload.single('image'),
        beforePrediction,
        predictionHandler,
        afterPredictionCleanup
    );

export default router;