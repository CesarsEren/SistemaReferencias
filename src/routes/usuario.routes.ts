import { Request, Response, Router } from "express";
import { login, logout, registrar ,verificartoken} from "../controllers/usuario.controller";
//getPosts, createPost
import { body, check, validationResult } from "express-validator";

const router = Router();

//router.route("/").get(getUsuarios);

/*body("email").isEmail(), body("password").isLength({ min: 5 })*/
router.post(
  "/login",
  [
    check("email", "Formato Incorrecto").exists().isEmail(),
    check("password", "Tamaño Incorrecto").exists().isLength({ min: 4 }),
  ],
  login
);
router.get("/validatoken/:token", verificartoken);

router.post(
  "/registrar",
  [
    check("correo", "Formato Incorrecto").exists().isEmail(),
    /* check("password", "Tamaño Incorrecto").exists().isLength({ min: 4 }),
    check("nombre", "Tamaño Incorrecto").exists().isLength({ min: 4 }),
    check("paterno", "Tamaño Incorrecto").exists().isLength({ min: 2 }),
    check("materno", "Tamaño Incorrecto").exists().isLength({ min: 2 }),
    check("materno", "Tamaño Incorrecto").exists().isLength({ min: 2 }),*/
  ],
  registrar
);

router.get("/logout", logout);

router.get("/session", (req, res) => {
  let session: any = req.session;
  res.json(session.user);
});

export default router;
