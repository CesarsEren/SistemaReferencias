import { Router, Request, Response } from "express";
const path = require("path");
const router = Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

/*router.get("/", (req: Request, res: Response) => {
  const session: any = req.session;
  session.cuenta = session.cuenta ? session.cuenta + 1 : 1;
  res.send("hola" + session.id + " || " + session.cuenta);
});*/

export default router;
