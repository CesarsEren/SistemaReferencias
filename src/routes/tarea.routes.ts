import { Router } from "express";
import tarea from "../controllers/tarea.controller";
//getPosts, createPost

const router = Router();

router.route("/").get(tarea.getTareas);

export default router;
