import express from "express";
import { deleteUser, getUserById, getUserListings, test, updateUser } from "../controllers/user.controller.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router();


router.get('/test', test);
router.put('/update/:id', verifyUser, updateUser);
router.delete('/delete/:id', verifyUser, deleteUser);
router.get('/listings/:id', verifyUser, getUserListings);
router.get('/:id', verifyUser, getUserById);
export default router;