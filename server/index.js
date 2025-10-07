import express from 'express'
import router from './router/router.js';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Validate base server env early
const serverRequired = [
    'AWS_REGION',
    'AWS_ACCESS_KEY_ID',
    'AWS_SECRET_ACCESS_KEY',
    'AWS_BUCKET_NAME'
];

for (const key of serverRequired) {
    if (!process.env[key] || process.env[key].trim() === '') {
        console.error(`❌ Missing required env var ${key}. Set it in server/.env`);
    }
}

// CORS configuration
const allowedOrigins = [
    process.env.CORS_ORIGIN || 'http://localhost:3000',
    'http://localhost:3001'
];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) return callback(null, true); // allow curl/postman
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use('/', router);

// Centralized error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);

    // Multer/Multer-S3 common errors
    if (err && err.message) {
        return res.status(400).json({ error: err.message });
    }

    return res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
app.listen(port, () => {
    console.log(`🚀 QuickDrop Server is running on port ${port}`);
    console.log(`📁 Files will be stored on AWS S3`);
    console.log(`🌐 CORS enabled for: ${allowedOrigins.join(', ')}`);
})
