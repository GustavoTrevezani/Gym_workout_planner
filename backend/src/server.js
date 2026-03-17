import express from "express";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFound from "./middlewares/notFound.js";

const app = express();

app.use(express.json());
app.use("/api", userRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Servidor rodando");
});
