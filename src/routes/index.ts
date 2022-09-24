import { Router } from "express";
import vehicleRoutes from "./vehiclesRoutes";

const routes = Router();

routes.use(vehicleRoutes);

export default routes;
