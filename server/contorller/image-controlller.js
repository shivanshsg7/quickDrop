import File from "../models/file.js";

// Function to upload the image
export const uploadImage = async (req, res) => {
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname
    }
    try {
        const file = await File.create(fileObj);
        // console.log(file);
        return res.status(200).json({
            path: `http://localhost:4000/file/${file._id}`
        });
    } catch (error) {
        console.error("Error in uploadImage:", error);
        return res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

// function to download the image
export const downloadImage = async (req, res) => {
    try {
        const file = await File.findById(req.params.fileId);
        file.downloadContent++;
        await file.save();
        res.download(file.path, file.name);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message
        })
    }
}
