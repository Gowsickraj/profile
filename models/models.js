const mongoose = require("mongoose")


const testing_Schema = new mongoose.Schema({
    name : {
        type : String,
        unique : true,
        required : true
    },
    job : {
        type : String,
        required : true
    },
    company : {
        type : String,
        enum : ["zustpe tech","zustpe payments"],
        default : "zustpe payments"
    }
});

const profileModel = mongoose.model("profile",testing_Schema)

module.exports = profileModel;