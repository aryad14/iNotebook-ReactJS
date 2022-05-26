const jwt = require('jsonwebtoken');
const JWT_SECRET = 'hellow$$orld';

const fetchUser = (req, res, next)=>{
    //Get User from JWT Token and adding ID to request object 
    const token = req.header('authToken')
    if(!token){
        res.status(401).send({error: "Please auth using Valid Token"})
    }
    
    try {
        //Getting user ID from database
        const data = jwt.verify(token, JWT_SECRET);
        req.user =  data.user;
        next();
    }
    catch (error) {
        res.status(401).send({error: "Please auth using Valid Token"})
    }
}


module.exports = fetchUser;