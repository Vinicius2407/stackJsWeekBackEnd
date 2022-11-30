import path from "node:path";
import express from "express";
import mongoose from "mongoose";

import { router } from "./router";

mongoose.connect("mongodb://localhost:27017")
	.then(() => {
		const app = express();
		const port = 8000;

		app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads"))); // Quando é usado esse endpoint, o express retorna o arquivo propriamente dito, pq ele verifica que o arquivo é statico.
		app.use(express.json()); // Recebe String e transforma em json para fazer a manipulação dentro do body.
		app.use(router);

		app.listen(port, () => {
			console.log(`Server is running on http://localhost:${port}`);
		});
	})
	.catch(err => console.error("Could not connect to MongoDB", err));


