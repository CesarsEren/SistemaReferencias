import { Router, Request, Response } from "express";
const path = require("path");
const router = Router();

//res.sendFile(path.join(__dirname, "index.html"));
router.get("/", (req, res) => {
  res.redirect("/busqueda");
});
router.get("/busqueda", (req, res) => {
  let session: any = req.session;
  //dashboard
  //if (typeof session.user !== "undefined") {
  res.render("viempresa/busqueda", {
    logeado: typeof session.user !== "undefined",
  });
  /*} else {
    res.redirect("/login");
  }*/
});

router.get("/historial-busqueda", (req, res) => {
  let session: any = req.session;
  //dashboard
  //if (typeof session.user !== "undefined") {
  res.render("viempresa/historialbusqueda", {
    logeado: typeof session.user !== "undefined",
  });
  /*} else {
    res.redirect("/login");
  }*/
});

router.get("/solicitudes-referencia", (req, res) => {
  let session: any = req.session;
  //dashboard
  //if (typeof session.user !== "undefined") {
  res.render("viempresa/lista-solicitud-referencia", {
    logeado: typeof session.user !== "undefined",
  });
  /*} else {
    res.redirect("/login");
  }*/
});

export default router;
