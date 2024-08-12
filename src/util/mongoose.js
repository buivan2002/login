module.exports = {
    mutiplemonggoseobject: function(monggose){
        return monggose.map((monggo) => monggo.toObject() )
    },
    mongooseToObject: function(mongodb){
        return mongodb ? mongodb.toObject() : mongodb
    },
}