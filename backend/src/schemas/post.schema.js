const {z} = require("zod");
const { date } = require("zod/mini");

const PostSchemaCreate=z.object({
    title:z.string().min(5),
    content:z.string().min(10)

});

const PostSchemaUpadate=({
    title:z.string().min(5).optional(),
    content:z.string().min(10).optional()
});

const PostSchemaResponse=z.object({
    id:z.number(),
    title:z.string(),
    content:z.string(),
    createdat:z.date(),
    updatedAt:z.date(),
    authorId:z.number()
});

module.exports={PostSchemaCreate,PostSchemaUpadate,PostSchemaResponse}