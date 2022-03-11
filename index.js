import express, { json, urlencoded } from "express";
import globals from "./config/globals.js";
const { PORT } = globals;
import connection from "./config/conection.js";
import router from "./routes/players.js";
const app = express();

// Middleware
app.use(json());
app.use(urlencoded({ extended: true }));

//Routes
app.get("/", (req, res) => res.redirect("/api/players"));
app.use("/api/players", router());

// Server Initialize
connection()
  .then(message => {
    console.info(message, "...");
    const server = app.listen(globals.PORT, () => console.info(`Servidor en el puerto ${PORT}`));
    server.on("error", error => logger.error(error));
  })
  .catch(error => console.log(error));
