const User = require("../model/user");

const getUser = async (req,res) => {
    // if user already exists
    return res.json({"test":"done"})
    // const user = User.findOne({username:username})
}

const createUser = async (req,res) => {
    // return res.json({test: "Post Successful"})   
    const username = req.body;
    if(typeof username == "undefined"){
        return res.status(401).send("missing username")
    } else {
        const oldUser = await User.findOne(username);
        if(oldUser){
           return  res.json({_id:oldUser._id,username:oldUser.username})
        } else {
        const user = await User.create(username);
        console.log(user)
        return res.json({_id:user.id,username:user.username})
        }
    }
}
module.exports = {getUser,createUser}