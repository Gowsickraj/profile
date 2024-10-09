require("dotenv").config();
const express = require("express")
const cors = require("cors");
const { router } = require("./routes/routes");

try {
    const app = express();
    app.use(express.json())
    app.use(cors());
    app.use(express.urlencoded({extended:true}))
    app.use("api/test" , router)

    const port = process.env.PORT

    app.listen(port , () => {
        console.log(`Server is connected in port ${port}`);
        
    })
} catch (error) {
    console.log(`${error} >>>>>>>>>>>>>server.js`);
    
}