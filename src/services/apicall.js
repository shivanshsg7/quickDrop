import axios from "axios"

const API_URL = "http://localhost:4000";

export const uploadFile = async (data) => {

    try {
        let response = await axios.post(`${API_URL}/upload`, data);
        return response.data;

    } catch (error) {
        console.log(error.message);
        // console.log("Error coming in the client side");
        // console.error("Error while calling api ", error.message);
    }


}