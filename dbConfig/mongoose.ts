
// mongoose
import mongoose from "mongoose";

// function to connect with database
const connect = () => {
    mongoose.connect(process.env.MONGO_URL!)
    .then(() => console.log('Db connected'))
    .catch((error) => {
        console.log('Error in DB connection');
        console.log(error);
        process.exit();
    })
}

module.exports = connect;