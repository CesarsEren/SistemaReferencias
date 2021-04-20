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
Object.defineProperty(exports, "__esModule", { value: true });
exports.conectarDb = void 0;
const mssql_1 = require("mssql");
const config = {
    server: "pruebasnextu.database.windows.net",
    user: "prueba",
    password: "Pk2pk2pk2$",
    database: "bd_referidos",
    options: {
        trustedconnection: true,
        enableArithAbort: true,
        instancename: "SQLEXPRESS",
        encrypt: true,
    },
    port: 1433,
};
function conectarDb() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new mssql_1.ConnectionPool(config).connect();
    });
}
exports.conectarDb = conectarDb;
