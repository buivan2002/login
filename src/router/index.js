const newRoutes = require ('../router/new')
const siteRoutes = require ('../router/site')
const coursesRoutes = require ('./courses')
const meRoutes = require ('../router/me')
const loginRoutes = require ('../router/loginRoutes')


function route (app){

    app.use('/me',meRoutes)
    app.use('/new',newRoutes)
    app.use('/courses', coursesRoutes)
    app.use('/login',loginRoutes)
    app.use('/',siteRoutes)

}


  
module.exports = route
