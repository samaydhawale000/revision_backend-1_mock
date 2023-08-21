function loginMiddle(req,res,next){

    if(req.body.email && req.body.password ){
    next()
    }
    else{
        res.send("All Fields are mandetory")
    }
}

module.exports = loginMiddle