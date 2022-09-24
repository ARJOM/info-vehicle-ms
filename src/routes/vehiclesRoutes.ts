import { Router } from "express";
import VehicloController from "./../controllers/vehicleController";

const routes = Router();

const vehicleController = new VehicloController();

routes.post("/vehicles", vehicleController.create.bind(vehicleController));
routes.get("/vehicles", vehicleController.list.bind(vehicleController));
routes.get("/vehicles/:id", vehicleController.detail.bind(vehicleController));
routes.patch("/vehicles/:id", vehicleController.update.bind(vehicleController));
routes.delete(
  "/vehicles/:id",
  vehicleController.delete.bind(vehicleController)
);

export default routes;
