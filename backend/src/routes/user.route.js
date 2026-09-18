const express= require("express");
const {UserCreate,userList,userUpdate,userdelete,singleuser}=require("../controller/user.controller");
const swaggerJSDoc = require("swagger-jsdoc");



const router=express.Router()

/**
 * @swagger
 * /User:
 *   post:
 *     summary: Create a new user
 *     tags: [users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Mtundu
 *               email:
 *                 type: string
 *                 example: dotto@example.com
 *               password:
 *                 type: string
 *                 example: secret123
 *     responses:
 *       201:
 *         description: User created successfully
 * 
 */

router.post("/User",UserCreate);

/**
 * @swagger
 * /User:
 *   get:
 *     summary: Get all users
 *     tags: [users]
 *     responses:
 *       200:
 *         description: list of users
 * 
 */

router.get("/User",userList);

/**
 * @swagger
 * /User/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: User details
 *       404:
 *         description: User not found
 * 
 */

router.get("/User/:id",singleuser);

/**
 * @swagger
 * /User/{id}:
 *   put:
 *     summary: Update a user
 *     tags: [users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Mtundu Updated
 *               email:
 *                 type: string
 *                 example: updated@example.com
 *               password:
 *                 type: string
 *                 example: newsecret123
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 * 
 */

router.put("/User/:id",userUpdate);

/**
 * @swagger
 * /User/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags: [users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 * 
 */

router.delete("/User/:id",userdelete);

module.exports=router;