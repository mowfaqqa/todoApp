const {connectToDatabase} = require('../../../lib/mongodb')
const ObjectId = require('mongodb').ObjectId

import { NextApiRequest, NextApiResponse } from "next";

// CONTROLLERS

// GET TODO
const getTodos = async (req: NextApiRequest, res: NextApiResponse) => {
try {
   // connect to the database
   let { db } = await connectToDatabase();
   const todos = await db.collection('todos').find({}).toArray()

   return res.json({
    message: todos,
    success: true
   })
} catch (error : any) {
   // return the error
   return res.json({
    message: new Error(error).message,
    success: false,
});
}
}

// CREATE TODO
const createTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
     // connect to the database
   let { db } = await connectToDatabase();
   // add the post
   await db.collection('todos').insertOne(req.body);
   return res.json({
    success: true,
    message: "Todo added successfully"
   })
  } catch (error : any) {
     // return an error
     return res.json({
      message: new Error(error).message,
      success: false,
  });
  }
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
// switch the methods
switch (req.method) {
  case 'GET': {
    return getTodos(req, res)
}
  case 'POST': {
    return createTodo(req, res)
}
 
}
}

