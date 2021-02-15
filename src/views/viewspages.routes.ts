import { Router, Request, Response } from "express";
const path = require("path");
const router = Router();

router.get("/tablero", (req, res) => {
  res.render("pages/tablero");
});

router.get("/mensaje", (req, res) => {
  res.render("pages/mensaje");
});

export default router;