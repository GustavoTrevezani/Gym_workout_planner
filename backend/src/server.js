import "dotenv/config";
import express from "express";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFound from "./middlewares/notFound.js";
import authRoutes from "./auth/authRoutes.ts";

const app = express();

app.use(express.json());
app.use("/api", userRoutes);
app.use("/auth", authRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Servidor rodando");
});
