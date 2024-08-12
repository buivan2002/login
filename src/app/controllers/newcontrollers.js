class NewController{
    index(req,res){
        res.render('new');
    }
    show(req,res){
        res.send('NEWS')
    }
}

module.exports = new NewController