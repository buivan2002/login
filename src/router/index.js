const newRoutes = require ('../router/new')
const siteRoutes = require ('../router/site')
const coursesRoutes = require ('./courses')
const meRoutes = require ('../router/me')
const loginRoutes = require ('../router/loginRoutes')
const vjpRoutes = require ('../router/vjpRoutes')
const jwt = require('jsonwebtoken');

var check = (req, res, next) => {
    try{
        const token = req.cookies.token
        console.log('TOKEN', token)
    
        var ketqua = jwt.verify(token,'mk')
        console.log('DATA', ketqua)
        if(ketqua){
            next()
        }
    }
    catch (error) {
        return res.redirect('/login')
    }
}
function route (app){
    app.use('/login',loginRoutes)
    app.use(check)
    app.use('/me',meRoutes)
    app.use('/new',newRoutes)
    app.use('/courses', coursesRoutes)
    app.use('/vjp', vjpRoutes)
    app.use('/',siteRoutes)

}


  
module.exports = route
