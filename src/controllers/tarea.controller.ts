import { Request, Response } from "express";

import { conectarDb } from "../databasemssql";

async function getTareas(req: Request, res: Response): Promise<Response> {
  const con = await conectarDb();
  const tareas = await con.query("select * from tareas");
  return res.json(tareas.recordsets);
}

export = {
  getTareas,
};
