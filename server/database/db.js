import mongoose from 'mongoose';

const Connection = async (username, password) => {
    
    const URL = `mongodb://${username}:${password}@cluster0-shard-00-00.p6sle.mongodb.net:27017,cluster0-shard-00-01.p6sle.mongodb.net:27017,cluster0-shard-00-02.p6sle.mongodb.net:27017/?ssl=true&replicaSet=atlas-yp8lqg-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`
    try {   
        
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;