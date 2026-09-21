import mongoose from "mongoose";
import dns from "dns";

// Force Google DNS to resolve MongoDB Atlas SRV records
dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB connected")
    } catch (error) {
        console.log("DB error:", error.message)
    }
}
export default connectDb