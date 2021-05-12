"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path = require("path");
const router = express_1.Router();
//res.sendFile(path.join(__dirname, "index.html"));
router.get("/lista.referencia", (req, res) => {
    let session = req.session;
    res.render("viusuario/lista-referencia", {
        logeado: typeof session.user !== "undefined",
    });
});
router.get("/perfil", (req, res) => {
    res.render("viusuario/perfil");
});
router.get("/solicitar.referencia", (req, res) => {
    let session = req.session;
    res.render("viusuario/solicitar-referencia", {
        logeado: typeof session.user !== "undefined",
    });
});
exports.default = router;
