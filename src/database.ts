import { ConnectionPool } from "mssql";
const config = { 
  /*user: "sa",
  password: "123",*/
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

export async function conectarDb() {
  return await new ConnectionPool(config).connect();
}