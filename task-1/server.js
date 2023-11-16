const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env"});
const port = process.env.PORT || 5001;
const itemRouter = require("./router/itemRouter");
const app = express();

app.use(express.json());
app.use("/todo", itemRouter);


app.listen(port, ()=>{
    console.log(`server in port ${port}`);
})