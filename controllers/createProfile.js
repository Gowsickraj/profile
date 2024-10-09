const profileModel = require("../models/models");

const create_profile = async (res,req)=>{

   try {

    const {name, job, company}= req.body;

    if(!name || !job){
        return res.status(200).json({msg : "name and job is invaild", code : 400})
    }
    const data = company
    ?{name, job, company }:{name, job}

    const employees = await profileModel.findOne({name});
    if(employees){
        return res.status(200).json({msg : "name already exist", code : 400})
    }

    const newEmployees = await profileModel.create(data);

    if(newEmployees){
        return res.status(200).json({data : newEmployees, code :200})
    }
    else{
        return res.status(200).json({ msg : "bad request" , code:400})
    }


   } catch (error) {
        return res.status(200).json({msg : "someting went wrong" ,code: 500})
   }
}
module.exports = create_profile