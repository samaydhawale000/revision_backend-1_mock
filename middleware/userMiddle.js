
function userMiddle(req,res,next){

    if(req.body.email && req.body.password && req.body.conformPass){
        
        if(req.body.password == req.body.conformPass){
            next()
        }
        else{
            res.send("Password and conform Password are not maching")
        }
    }
    else{
        res.send("All Fields are mandetory")
    }
}

module.exports = userMiddle