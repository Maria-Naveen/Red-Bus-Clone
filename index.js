const express = require('express');
const app = express();
const authRoutes = require("./routes/authRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config();

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("Database connected successfully!");
})
.catch((err)=>{
    console.error(err);
})

app.use(express.json())
app.use("/api/user",authRoutes);

app.listen(3000,()=>{
    console.log("Server running...");
});