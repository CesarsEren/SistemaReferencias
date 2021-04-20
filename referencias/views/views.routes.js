"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path = require("path");
const router = express_1.Router();
//res.sendFile(path.join(__dirname, "index.html"));
router.get("/", (req, res) => {
    let session = req.session;
    res.render("index", {
        logeado: typeof session.user !== "undefined",
    });
});
router.get("/login", (req, res) => {
    //res.sendFile(path.join(__dirname, "index.html"));
    let session = req.session;
    res.render("login", {
        logeado: typeof session.user !== "undefined",
    });
});
router.get("/completa.tu.registro", (req, res) => {
    res.render("completarregistro");
});
router.get("/registrar", (req, res) => {
    //res.sendFile(path.join(__dirname, "index.html"));
    let session = req.session;
    res.render("registrar", {
        logeado: typeof session.user !== "undefined",
    });
});
/*router.get("/", (req: Request, res: Response) => {
  const session: any = req.session;
  session.cuenta = session.cuenta ? session.cuenta + 1 : 1;
  res.send("hola" + session.id + " || " + session.cuenta);
});*/
exports.default = router;
