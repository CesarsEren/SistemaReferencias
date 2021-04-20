import { Router, Request, Response } from "express";
const path = require("path");
const router = Router();

//res.sendFile(path.join(__dirname, "index.html"));
router.get("/", (req, res) => {
  let session: any = req.session;
  res.render("index", {
    logeado: typeof session.user !== "undefined",
  });
});

router.get("/login", (req, res) => {
  //res.sendFile(path.join(__dirname, "index.html"));
  let session: any = req.session;
  res.render("login", {
    logeado: typeof session.user !== "undefined",
  });
});

router.get("/completa.tu.registro", (req, res) => {
  
  res.render("completarregistro");
});

router.get("/registrar", (req, res) => {
  //res.sendFile(path.join(__dirname, "index.html"));
  let session: any = req.session;
  res.render("registrar", {
    logeado: typeof session.user !== "undefined",
  });
});

/*router.get("/", (req: Request, res: Response) => {
  const session: any = req.session;
  session.cuenta = session.cuenta ? session.cuenta + 1 : 1;
  res.send("hola" + session.id + " || " + session.cuenta);
});*/

export default router;
