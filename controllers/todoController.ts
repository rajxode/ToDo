
import {Request,Response} from 'express';
const Todo = require('../models/Todo');


module.exports.show = async(req : Request,res : Response) => {
    try {
        const todos = await Todo.find({});
        
        return res.status(200).json({
            success:true,
            todos
        })
    } catch (error : any) {
        return res.status(500).json({
            message:error.message
        });
    }
}

module.exports.add = async(req:Request,res:Response) => {
    try {
        const { name , status } = req.body;

        const todo = await Todo.create({
            name,
            status
        });

        return res.status(201).json({
            success:true,
            message:'Todo Added'
        })
    } catch (error : any) {
        return res.status(500).json({
            message:error.message
        });
    }
}

module.exports.remove = async(req:Request,res:Response) => {
    try {
        const { id } = req.params;

        await Todo.findByIdAndDelete(id);

        return res.status(200).json({
            success:true,
            message:'Todo Removed'
        })
    } catch (error : any) {
        return res.status(500).json({
            message:error.message
        });
    }
}


module.exports.update = async(req:Request,res:Response) => {
    try {
        const { id } = req.params;
        const { data } = req.body;

        await Todo.findByIdAndUpdate(
                        id,
                        data,
                        { 
                            new:true,
                            runValidators:true,
                            useFindAndModify: false,
                        }
                    );

        return res.status(200).json({
            success:true,
            message:'Todo Updated'
        })
    } catch (error : any) {
        return res.status(500).json({
            message:error.message
        });
    }
}