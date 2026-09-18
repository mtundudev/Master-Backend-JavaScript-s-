// import prisma

const { prisma } = require("../config/prisma");

const createUser=async(data) =>{
    return await prisma.user.create({
        data
    });
};

const getAllUser=async()=>{
    return await prisma.user.findMany()
};

const getUseId=async(id)=>{
    return await prisma.user.findUnique({
        where:{
            id
        },  
    });
};

const updateUser=async(data,id)=>{
    return await prisma.user.update({
        where:{
            id
        },
        data
    });
};

const userDelete=async(id)=>{
    return await prisma.user.delete({
        where:{
            id
        },
    });
};

module.exports={
    createUser,getAllUser,getUseId,userDelete,updateUser
}