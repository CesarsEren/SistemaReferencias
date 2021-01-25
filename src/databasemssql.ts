import { ConnectionPool } from "mssql";
const config = {
  user: "sa",
  password: "123",
  server: "127.0.0.1",
  database: "crudnode",
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    instancename: "SQLEXPRESS",
    encrypt: false,
  },
  port: 1433,
};

export async function conectarDb() {
  return await new ConnectionPool(config).connect();
}
