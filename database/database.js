const { createConnection } = require("mongoose")


mongoose= require("mongoose")

const connction_Db = ()=>{
    try {
        const test_Db = createConnection(process.env.MONO)
        
    } catch (error) {
        console.log(`${error} >>>>>>>>>>>>>database.js`)
    }
}

module.exports = connction_Db;