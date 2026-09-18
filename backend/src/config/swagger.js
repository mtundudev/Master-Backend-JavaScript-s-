const swaggerjsdoc=require("swagger-jsdoc");
const { serve } = require("swagger-ui-express");
const { describe } = require("zod/v4/core");

const options={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Blog post API",
            version:"1.0.0",
            description:"REST API FOR A BLOG APPLICATION"
        },
        servers:[
            {
                url: process.env.API_URL || `http://localhost:${process.env.PORT || 3000}`
            }
        ]
    },
    apis:["./src/routes/*.js", "./src/routes/**/*.js"]
};

const swaggerSpec=swaggerjsdoc(options);

module.exports=swaggerSpec;