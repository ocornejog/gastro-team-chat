const mongoose = require('mongoose');

async function connectDB() {
    try{
        await  mongoose.connect(process.env.DATABASE, {
            useCreateIndex: true,
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        });

        console.log('DB is connected');
    }
    catch (error) {
        console.log(error);
    }
}
 
 module.exports = {connectDB};