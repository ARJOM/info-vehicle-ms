import { IRepository } from "./IRepository";
import VehicleInterface from "interfaces/vehicleInterface";
import Vehicle from "model/vehicle";

export class VehicleRepository implements IRepository<VehicleInterface> {
  public async exists(model: VehicleInterface): Promise<boolean> {
    const result = await this.findById(model.id);
    return !!result;
  }

  public async save(model: VehicleInterface): Promise<VehicleInterface> {
    const alreadyExists = this.exists(model);

    if (alreadyExists) {
      const sequelizeVehicle = await Vehicle.findOne({
        where: { id: model.id },
      });
      try {
        sequelizeVehicle.update(model.id, model);
      } catch (error) {
        throw error;
      }
    } else {
      const newVehicle = new Vehicle(model);
      newVehicle.save();
    }

    return model;
  }

  public async findById(id: number): Promise<VehicleInterface> {
    const result = await Vehicle.findByPk(id);
    return result;
  }

  public async getAll(): Promise<VehicleInterface[]> {
    const result = await Vehicle.findAll();
    return result;
  }

  public async deleteById(id: string): Promise<number> {
    return Vehicle.destroy({ where: { id: id } });
  }
}
