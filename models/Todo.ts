

import mongoose from "mongoose";


const todoSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,'Please enter the name of todo']
    },
    status:{
        type: String,
        required: [true, 'Please select the status'],
        enum: {
            values:[
                // different values of status
                'done',
                'not done',
            ],
            // if user give a value other than the above mentioned values then show following message
            message:"Please select status values ONLY between 'done' and 'not done'"
        },
        default: 'not done'
    },  
},
{
    timestamps:true
});

const Todo = mongoose.model('Todo',todoSchema);

module.exports = Todo;