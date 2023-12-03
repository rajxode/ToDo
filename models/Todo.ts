

// mongoose  
import mongoose from "mongoose";

// schema to store todo
const todoSchema = new mongoose.Schema({
    // name of todo
    name:{
        type: String,
        required:[true,'Please enter the name of todo']
    },
    // status of todo
    status:{
        type: String,
        required: [true, 'Please select the status'],
        // values for status
        enum: {
            values:[
                'done',
                'not done',
            ],
            // if user give a value other than the above mentioned values then show following message
            message:"Please select status values ONLY between 'done' and 'not done'"
        },
        // default value of status
        default: 'not done'
    },  
},
{
    // time of creation and update
    timestamps:true
});

// creating model from schema
const Todo = mongoose.model('Todo',todoSchema);

// export the model
module.exports = Todo;