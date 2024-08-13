const { collection } = require ('../models/user') 
const bcrypt = require ("bcrypt")
const jwt = require('jsonwebtoken');

class auth{

    signup = async (req, res) => {
    try {
        const userExists = await collection.findOne({email: req.body.email}) 
        if (userExists){
            return res.status(400).json({
                message: "Da duoc dang ky"
            })
        }
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        const user = await collection.create ({
            username: req.body.email,
            password: hashedPassword
        })
        user.password = undefined
        return res.status(200).json({
            message: "dktc "
        })
    }
    catch (error){
        return res.status (500).json({
            name: error.name,
            message: error.message
        })
    }
    
}

    loginup = async (req, res) => {
        try{
            const user = await collection.findOne({email: req.body.email})
            if (!user){
                return res.status(404).json({
                    message:"chua dc dk"
                })
            }
            const isMatch = await bcrypt.compare(req.body.password , collection.password)
            if (!isMatch){
                return res.status(400).json({
                    message:"mk sai"
                })
            }
            const accessToken = jwt.sign 
        }
        catch(error){
            return res.status(500).json({
                message: error.message
            })
        }
    }
}
module.exports = new auth