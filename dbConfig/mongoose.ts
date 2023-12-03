
// mongoose
import mongoose from "mongoose";

// function to connect with database
const connect = () => {
    // connect with database
    mongoose.connect(process.env.MONGO_URL!)
    // connection established
    .then(() => console.log('Db connected'))
    // error in DB connection
    .catch((error) => {
        // show message
        console.log('Error in DB connection');
        // error
        console.log(error);
        process.exit();
    })
}

// export the function
module.exports = connect;