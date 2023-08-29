import mongoose from "mongoose";

const DBConnetion = async () => {
    try {
        const MONGO_URL = 'mongodb+srv://file123:file123@cluster0.tdedsai.mongodb.net/'
        await mongoose.connect(MONGO_URL, { useNewUrlParser: true });
        console.log("MongoDb Connected");
    } catch (error) {
        console.log(error.message);
        console.log('Error while connecting the database');
    }
}

export default DBConnetion;