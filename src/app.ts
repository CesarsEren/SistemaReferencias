import express, { Application } from "express";
import ExpressSession from "express-session";
import morgan from "morgan";
import cors from "cors";
const path = require("path");

//Routes
import TareaRoutes from "./routes/tarea.routes";

//Views
import ViewRoutes from "./views/views.routes";

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
    this.app.use("/tareas", TareaRoutes);
  }
  views() {
    this.app.use(ViewRoutes);
    this.app.use(express.static(path.join(__dirname, "public")));
  }
  async IniciarServidor() {
    await this.app.listen(this.app.get("port"));
    console.log(`SERVER EN PUERTO ${this.app.get("port")}`);
  }
}
