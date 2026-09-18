const {createUser,getAllUser,getUseId,updateUser,userDelete}=require("../service/user.service")

const UserCreate=async(req,res)=>{
    const user=await createUser(req.body);
    res.status(201).json(user);
};

const userList=async(req,res)=>{
    const user= await getAllUser();
    res.status(200).json(user);
};

const singleuser=async(req,res)=>{
    const user= await getUseId(Number(req.params.id));
    res.status(200).json(user);
};

const userUpdate=async(req,res)=>{
    const user=await updateUser(req.body,Number(req.params.id));
    res.status(200).json(user);
};

const userdelete=async(req,res)=>{
    const user= await userDelete(Number(req.params.id));
    res.status(200).json(user);
};

module.exports={
    UserCreate,
    userList,
    userdelete,
    userUpdate,
    singleuser
}