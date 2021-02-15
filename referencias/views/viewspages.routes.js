"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path = require("path");
const router = express_1.Router();
router.get("/tablero", (req, res) => {
    res.render("pages/tablero");
});
router.get("/mensaje", (req, res) => {
    res.render("pages/mensaje");
});
exports.default = router;
