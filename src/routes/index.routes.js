import { Router } from "express";
import {pool} from "../db/index.js";

const router = Router();

router.get("/", async (req, res) => {
  const [rows] = await pool.query(`SELECT * FROM usuarios`)
  res.json(rows);
});

router.get("/purebaConeccion", async (req, res) => {
  const result = await pool.query(`SELECT "Hola esta es una prueba de coneccion" AS RESUL` )
  res.json(result[0]);
});

router.get("/create", async (req, res) => {
  const result = await pool.query(`INSERT INTO usuarios (nombre, email, password) VALUES ('Juan', 'juancito@gmail.com', '312' )`)
  res.json(result);
});


export  {router};
