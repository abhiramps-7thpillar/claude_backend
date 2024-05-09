import express from "express";
import middlewares from "./config/middlewares.js";
import chalk from "chalk";

import ApiRoutes from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();
//PORT
const Port = process.env.PORT || 4000;

//create an express app
const app = express();

//use body parser middleware to parse JSON requests
middlewares(app);

//add api routes
app.use("/api", ApiRoutes);

app.listen(Port, (err) => {
  if (err) console.log(chalk.red("Cannot run!"));
  else console.log(chalk.green.bold(`Server ready at port: ${Port}`));
});
