"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path = require("path");
//Routes
const usuario_routes_1 = __importDefault(require("./routes/usuario.routes"));
//Views
const views_routes_1 = __importDefault(require("./views/views.routes"));
const viewsmenuempresa_routes_1 = __importDefault(require("./views/viewsmenuempresa.routes"));
const viewsmenuusuario_routes_1 = __importDefault(require("./views/viewsmenuusuario.routes"));
const viewspages_routes_1 = __importDefault(require("./views/viewspages.routes"));
class App {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.settings();
        this.middlewares();
        this.routes();
        this.views();
    }
    settings() {
        this.app.set("port", this.port || process.env.PORT || 3000);
    }
    middlewares() {
        this.app.use(cors_1.default());
        this.app.set("view engine", "ejs");
        this.app.set("views", path.join(__dirname, "views"));
        this.app.use(morgan_1.default("dev"));
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
        this.app.use(express_session_1.default({
            secret: "rrhh",
            resave: true,
            saveUninitialized: true,
        }));
    }
    routes() {
        //this.app.use(IndexRoutes);
        this.app.use("/usuarios", usuario_routes_1.default);
    }
    views() {
        this.app.use(views_routes_1.default);
        this.app.use(viewsmenuempresa_routes_1.default);
        this.app.use(viewsmenuusuario_routes_1.default);
        this.app.use(viewspages_routes_1.default);
        this.app.use(express_1.default.static(path.join(__dirname, "public")));
        this.app.use(function (req, res, next) {
            let session = req.session;
            res.status(404).render("404", {
                logeado: typeof session.user !== "undefined",
            });
        });
    }
    IniciarServidor() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get("port"));
            console.log(`SERVER EN PUERTO ${this.app.get("port")}`);
        });
    }
}
exports.App = App;
