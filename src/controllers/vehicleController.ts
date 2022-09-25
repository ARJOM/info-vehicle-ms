import { Request, Response } from "express";
import { VehicleMapper } from "../mappers/vehicleMapper";
import VehicleService from "./../services/vehicleService";

export default class VehicloController {
  public service: VehicleService = new VehicleService();

  async create(req: Request, res: Response) {
    const vehicle = req.body;
    try {
      const response = await this.service.save(vehicle);
      res.send(VehicleMapper.toDTO(response));
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async list(req: Request, res: Response) {
    try {
      const response = await this.service.list();
      res.send(response.map((vehicle) => VehicleMapper.toDTO(vehicle)));
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async detail(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      const response = await this.service.getById(id);
      res.send(VehicleMapper.toDTO(response));
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    const vehicle = req.body;
    const id = Number(req.params.id);
    try {
      const response = await this.service.update(id, vehicle);
      res.send(VehicleMapper.toDTO(response));
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      const response = await this.service.delete(id);
      res.send({ linhasAfetadas: response });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}
