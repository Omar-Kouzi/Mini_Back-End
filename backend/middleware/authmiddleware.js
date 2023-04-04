import jwt from "jsonwebtoken";

import dotenv from "dotenv";

dotenv.config();

const verifyToken = (req, res ,next) =>{
const token =
    res.body.token || req.query.token ;

    if(!token){
        return res.status(403).send("a token is required for authentication")
    }
try{ const decoded = jwt.verify(token, process.env.TOKEN_KEY);
req.user= decoded
}catch(err){
    return res.status(401).send("invalid token")
}
return(next)
}

export default verifyToken;