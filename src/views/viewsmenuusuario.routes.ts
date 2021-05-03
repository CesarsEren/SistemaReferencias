import { Router, Request, Response } from "express";
const path = require("path");
const router = Router();

//res.sendFile(path.join(__dirname, "index.html"));

router.get("/lista.referencia", (req, res) => {
  let session: any = req.session;
  res.render("viusuario/lista-referencia", {
    logeado: typeof session.user !== "undefined",
  });
});


router.get("/perfil", (req, res) => {
  res.render("viusuario/perfil");
});


router.get("/solicitar.referencia", (req, res) => {
  let session: any = req.session;
  res.render("viusuario/solicitar-referencia", {
    logeado: typeof session.user !== "undefined",
  });
});


export default router;
