import {MongoClient} from 'mongodb';

export default async function handler(req,res){ 

    if(req.method==='POST'){ 
        
        const data=req.body; 
        
        const user= await MongoClient.connect('mongodb+srv://m7mdjedi:5dBNAOsk6vgcjbEr@atlascluster.qasteah.mongodb.net/'); 
        const db=user.db();
        const database= db.collection('meetups'); 
        const response=await database.insertOne(data);
        console.log(response);
        user.close();
        res.status(201).json({message:"hello from backend"});

    }
}