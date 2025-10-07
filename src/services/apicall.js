import axios from "axios"

// Prefer env var, fallback to 4000
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

export const uploadFile = async (data) => {

    try {
        let response = await axios.post(`${API_URL}/upload`, data);
        return response.data;

    } catch (error) {
        const serverMessage = error?.response?.data?.error;
        const message = serverMessage || error.message || 'Upload failed';
        console.log('Upload error:', message);
        return {
            error: message,
            path: null
        };
    }


}