import mongoose, { mongo } from "mongoose";

import React from 'react'

const dbConfig = async () => {
  try{
        mongoose.connect(process.env.MONGO_URL);
        const connection = mongoose.connection;
        
        connection.on('connected',()=>{
            console.log('MongoDB Connected');
        });

        connection.on('error',(err)=>{
            console.log(`Mongo Connection Error: + ${err}`);
            process.exit(1);
        });
  }
  catch(error){
    console.log('Something Went Wrong')
    console.log(error);
  }
}

export default dbConfig
