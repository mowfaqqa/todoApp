const {connectToDatabase} = require('../../../lib/mongodb')
const ObjectId = require('mongodb').ObjectId
import { NextApiRequest, NextApiResponse } from "next";

// CONTROLLERS
// update todo
const updateTodo = async (req: any, res: NextApiResponse) => {
    try {
        const { id: todoId } = req.params;
         // connect to the database
         let { db } = await connectToDatabase();

         const todo = await db.collection('todos').updateOne(
            {
                _id: todoId
            },
            req.body,
         )

         if (!todo) {
            return res.status(404).json({ message:"No todo found"})
         }
         res.status(200).json({ id: todoId, data: req.body })
           
    } catch (error) {
        res.status(400).json({ message: error });
    }
}
//delete todo
const deleteTodo = async (req: any, res: NextApiResponse) => {
    try {
        const { id: todoId } = req.params;
         // Connecting to the database
         let { db } = await connectToDatabase();

         // Deleting the post
         await db.collection('todos').deleteOne({
             _id: todoId,
         });
         // returning a message
        return res.json({
            message: 'todo deleted successfully',
            success: true,
        });
    } catch (error) {
        
    }
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // switch the methods
    switch (req.method) {
      case 'PATCH': {
        return updateTodo(req, res)
    }
      case 'DELETE': {
        return deleteTodo(req, res)
    }
     
    }
    }