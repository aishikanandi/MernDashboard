import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import clientRoutes from "./routes/client.js"
import generalRoutes from "./routes/general.js"
import managementRoutes from "./routes/management.js"
import salesRoutes from "./routes/sales.js"

dotenv.config();
const app=express();
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"})) //cross site requests for embedded sources are managed
app.use(morgan("common")) //log requests
app.use(bodyParser.json()) //provides json-like experience for incoming requests
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

// ROUTES
app.use("/client",clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

