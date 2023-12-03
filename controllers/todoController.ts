
// express's request and response
import {Request,Response} from 'express';
// Todo model
const Todo = require('../models/Todo');


// controller for showing greeting message 
module.exports.greet = (req:Request,res:Response) => {
    // response 
    return res.status(200).json({
        success:true,
        message:'Hello World, Greetings !!!'
    })
}


// controller for showing list of all the todos in Database
module.exports.show = async(req : Request,res : Response) => {
    try {
        // getting all the todos
        const todos = await Todo.find({});
        
        // return response
        return res.status(200).json({
            success:true,
            todos
        })
    } catch (error : any) {
        // error
        return res.status(500).json({
            message:error.message
        });
    }
}


// controller for adding a new todo in list
module.exports.add = async(req:Request,res:Response) => {
    try {
        // todo data from request
        const { name , status } = req.body;

        // create a new todo
        const todo = await Todo.create({
            name,
            status
        });

        // return response
        return res.status(201).json({
            success:true,
            message:'Todo Added'
        })
    } catch (error : any) {
        // error
        return res.status(500).json({
            message:error.message
        });
    }
}


// controller to delete a todo from list
module.exports.remove = async(req:Request,res:Response) => {
    try {
        // id of todo to be deleted
        const { id } = req.params;

        // find by id and delete the todo from DB
        await Todo.findByIdAndDelete(id);

        // response
        return res.status(200).json({
            success:true,
            message:'Todo Removed'
        })
    } catch (error : any) {
        // error
        return res.status(500).json({
            message:error.message
        });
    }
}


// update a todo in list
module.exports.update = async(req:Request,res:Response) => {
    try {
        // id of todo to be updated
        const { id } = req.params;

        // find todo and update
        const todo = await Todo.findByIdAndUpdate(
                        id,
                        req.body,
                        { 
                            new:true,
                            runValidators:true,
                            useFindAndModify: false,
                        }
                    );

        // return reponse 
        return res.status(200).json({
            success:true,
            message:'Todo Updated',
        })
    } catch (error : any) {
        // error
        return res.status(500).json({
            message:error.message
        });
    }
}