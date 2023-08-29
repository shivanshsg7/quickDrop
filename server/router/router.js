import express from "express";
const router = express.Router();
import { uploadImage, downloadImage } from "../contorller/image-controlller.js";
import upload from "../utils/upload.js";
router.post('/upload', upload.single('file'), uploadImage);


router.get('/file/:fileId', downloadImage);

export default router;