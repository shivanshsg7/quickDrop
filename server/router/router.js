import express from "express";
const router = express.Router();
import { uploadImage, getFileInfo } from "../contorller/image-controlller.js";
import upload from "../utils/upload.js";

// Upload endpoint
router.post('/upload', upload.single('file'), uploadImage);

// Simple info endpoint (no database needed)
router.get('/info', getFileInfo);

export default router;