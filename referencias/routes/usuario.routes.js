"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
//getPosts, createPost
const express_validator_1 = require("express-validator");
const router = express_1.Router();
//router.route("/").get(getUsuarios);
/*body("email").isEmail(), body("password").isLength({ min: 5 })*/
router.post("/login", [
    express_validator_1.check("email", "Formato Incorrecto").exists().isEmail(),
    express_validator_1.check("password", "Tamaño Incorrecto").exists().isLength({ min: 4 }),
], usuario_controller_1.login);
router.get("/validatoken/:token", usuario_controller_1.verificartoken);
router.post("/registrar", [
    express_validator_1.check("correo", "Formato Incorrecto").exists().isEmail(),
], usuario_controller_1.registrar);
router.get("/logout", usuario_controller_1.logout);
router.get("/session", (req, res) => {
    let session = req.session;
    res.json(session.user);
});
exports.default = router;
