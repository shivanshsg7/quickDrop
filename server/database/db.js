import mongoose from "mongoose";

const DBConnetion = async () => {
    try {
        const MONGO_URL = 'mongodb+srv://shivanshsg7:admin@cluster0.dyqkb1r.mongodb.net/sharePod?retryWrites=true&w=majority&appName=Cluster0'
        await mongoose.connect(MONGO_URL, { useNewUrlParser: true });
        console.log("MongoDb Connected");
    } catch (error) {
        console.log(error.message);
        console.log('Error while connecting the database');
    }
}

export default DBConnetion;