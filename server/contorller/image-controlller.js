// Function to upload the image
export const uploadImage = async (req, res) => {
    try {
        // Check if file was uploaded successfully to S3
        if (!req.file) {
            return res.status(400).json({
                error: "No file uploaded"
            });
        }

        // Return S3 information directly (no database needed)
        return res.status(200).json({
            path: req.file.location, // Direct S3 URL
            fileName: req.file.originalname,
            fileSize: req.file.size,
            uploadDate: new Date().toISOString(),
            s3Key: req.file.key,
            bucket: req.file.bucket
        });
    } catch (error) {
        console.error("Error in uploadImage:", error);
        return res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

// function to get file info (since we don't have database anymore)
export const getFileInfo = async (req, res) => {
    try {
        // Since we removed the database, we can't track individual files
        // But we can provide a simple response
        return res.status(200).json({
            message: "File sharing service is active",
            note: "Files are stored directly on AWS S3 and are publicly accessible"
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message
        })
    }
}
