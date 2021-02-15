import express, { Application } from "express";
import ExpressSession from "express-session";
import morgan from "morgan";
import cors from "cors";
const path = require("path");

//Routes
import UsuarioController from "./routes/usuario.routes";

//Views
import ViewRoutes from "./views/views.routes";
import DashBoardRoutes from "./views/viewsdashboard.routes";
import PagesRoutes from "./views/viewspages.routes";

export class App {
  private app: Application;
  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
    this.views();
  }
  settings() {
    this.app.set("port", this.port || process.env.PORT || 3000);
  }

  middlewares() {
    this.app.use(cors());

    this.app.set("view engine", "ejs");
    this.app.set("views", path.join(__dirname, "views"));

    this.app.use(morgan("dev"));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(
      ExpressSession({
        secret: "rrhh",
        resave: true,
        saveUninitialized: true,
      })
    );
  }

  routes() {
    //this.app.use(IndexRoutes);
    this.app.use("/usuarios", UsuarioController);
  }
  views() {
    this.app.use(ViewRoutes);
    this.app.use(DashBoardRoutes);
    this.app.use(PagesRoutes);

    this.app.use(express.static(path.join(__dirname, "public")));
    this.app.use(function (req, res, next) {
      let session: any = req.session;
      res.status(404).render("404", {
        logeado: typeof session.user !== "undefined",
      });
    });
  }
  async IniciarServidor() {
    await this.app.listen(this.app.get("port"));
    console.log(`SERVER EN PUERTO ${this.app.get("port")}`);
  }
}
