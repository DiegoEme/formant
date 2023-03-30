import express from "express";
import apiRouter from "./routes/index.js";

const app = express();
app.use(express.json());

app.use("/api", apiRouter);

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
