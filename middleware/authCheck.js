function authCheck(req,res,next){

    if(req.headers.authorization){
    next()
    }
    else{
        res.send("Please Login")
    }
}

module.exports = authCheck