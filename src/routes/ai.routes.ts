import express from "express";
import multer from "multer";

import { getAiPage, sendPredictionResult, uploadPredictionImage } from "../controllers/ai.controller";

const router = express.Router();

const upload = multer({ dest: './assets' });

router
    .get('/', getAiPage)
    .get('/generate-prediction', sendPredictionResult)
    .post('/upload-image', upload.single('aiImage'), uploadPredictionImage);

export default router;