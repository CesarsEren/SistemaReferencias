"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path = require("path");
const router = express_1.Router();
//res.sendFile(path.join(__dirname, "index.html"));
router.get("/", (req, res) => {
    res.redirect("/busqueda");
});
router.get("/busqueda", (req, res) => {
    let session = req.session;
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
    let session = req.session;
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
    let session = req.session;
    //dashboard
    //if (typeof session.user !== "undefined") {
    res.render("viempresa/lista-solicitud-referencia", {
        logeado: typeof session.user !== "undefined",
    });
    /*} else {
      res.redirect("/login");
    }*/
});
exports.default = router;
