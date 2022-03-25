const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const routerApi = require("./src/routes");
const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Using the port", port));

/*Solicitudes HTTP
HTTP (POST, GET, GET{id}, PUT, DELETE) */

app.use(express.json());

/*Solicitudes de GET (CONSULTA)
http://localhost:5000/prueba_uno */

/* ..Prueba
app.get("/prueba_uno", (req, res) => {
  res.send("Solicitud de consulta");
});

*/
mongoose
  .connect(process.env.MONGODB_STRING_CONNECT)
  .then(() => console.log("Succes connect with mongoDB"))
  .catch((error) => console.log(error));

routerApi(app);
