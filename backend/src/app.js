const express= require("express");
const UserRouter=require("./routes/user.route")
const swaggerUi=require("swagger-ui-express")
const cors = require("cors");
const swaggerSpec =require("./config/swagger")
const app= express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(cors());
app.use(UserRouter);

module.exports=app;