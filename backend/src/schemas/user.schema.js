const {z} = require("zod");

const CreateUserSchema=z.object({
    name:z.string().min(2),
    email:z.string().email(),
    password:z.string().min(5)
});

const UserUpdateSchema=z.object({
    name:z.string().min(2).optional(),
    email:z.string().email().optional(),
    password:z.string().min(5).optional()
});

const UserschemaRepnse=z.object({
    id:z.number(),
    name:z.string(),
    email:z.string().email(),
    createdAt:z.date()
});
module.exports={ CreateUserSchema,UserUpdateSchema,UserschemaRepnse};