//import
import express from "express";
import morgan from "morgan";
import { puerto } from "./config.js";
import { router } from "../routes/index.routes.js";

//instancias
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//rutas
app.use(router);

//servidor
app.listen(puerto, () => {
  console.log(`server esta corriendo en el puerto ${puerto}`);
});