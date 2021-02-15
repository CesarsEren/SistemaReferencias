import { Router, Request, Response } from "express";
const path = require("path");
const router = Router();

//res.sendFile(path.join(__dirname, "index.html"));
router.get("/", (req, res) => {
  res.redirect("/dashboard");
});
router.get("/dashboard", (req, res) => {
  let session: any = req.session;
  //dashboard
  if (typeof session.user !== "undefined") {
    res.render("dashboard", {
      logeado: typeof session.user !== "undefined",
    });
  } else {
    res.redirect("/login");
  }
});
 
export default router;
