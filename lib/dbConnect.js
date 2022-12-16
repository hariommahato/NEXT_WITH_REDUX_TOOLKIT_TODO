import mongoose from 'mongoose'


const dbConnect = async () => {
    if (!mongoose.connection.readyState) {
        try {
            await mongoose.connect("mongodb+srv://hari:hari123@cluster0.vshi98h.mongodb.net/?retryWrites=true&w=majority");
        } catch (error) {
            handleError(error);
        }
    }
}


export default dbConnect;