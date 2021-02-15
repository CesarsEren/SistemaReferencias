"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path = require("path");
const router = express_1.Router();
//res.sendFile(path.join(__dirname, "index.html"));
router.get("/", (req, res) => {
    res.redirect("/dashboard");
});
router.get("/dashboard", (req, res) => {
    let session = req.session;
    //dashboard
    if (typeof session.user !== "undefined") {
        res.render("dashboard", {
            logeado: typeof session.user !== "undefined",
        });
    }
    else {
        res.redirect("/login");
    }
});
exports.default = router;
