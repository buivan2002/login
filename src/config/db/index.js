const mongoose = require('mongoose')

async function connect(){
    try{
        await mongoose.connect('mongodb+srv://vercel-admin-user:mbYFfQ8SlGTF0poG@cluster0.hc9av.mongodb.net/app_dev?retryWrites=true&w=majority&appName=Cluster0',{
            // useNewUrlParser : true,
            // useUnifiedTopology: true
        })
        console.log('ok')
    }
    catch(error){
        console.log('error')
    }
}

module.exports = {  connect }

