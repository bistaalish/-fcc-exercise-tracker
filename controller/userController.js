import User from "../model/user";

class UserController {
  async store(req, res) {
    return res.json({message: true});
    // try {
    //     const user = await User.findOne({username:req.body.username})
    //     if(!user){
            
    //     }    
    // } catch (error) {
    //     res.status(500).send("Internal Server Error");
    // }
  }

  async index(req, res) {
    return res.json({message: "index"});
  }

  async create(req, res) {
    return res.json();
  }

  async show(req, res) {
    return res.json();
  }

  async edit(req, res) {
    return res.json();
  }

  async update(req, res) {
    return res.json();
  }

  async destroy(req, res) {
    return res.json();
  }

  async view(req, res) {
    return res.json();
  }

  async grid(req, res) {
    return res.json();
  }

  async form(req, res) {
    return res.json();
  }
}

export default new UserController();
