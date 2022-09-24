import { IRepository } from "./IRepository";
import VehicleInterface from "./../interfaces/vehicleInterface";
import Vehicle from "./../model/vehicle";

export default class VehicleRepository
  implements IRepository<VehicleInterface>
{
  public async exists(model: VehicleInterface): Promise<boolean> {
    let result = false;

    if (!!model.id) {
      result = !!(await this.findById(model.id));
    }
    return result;
  }

  public async save(model: VehicleInterface): Promise<VehicleInterface> {
    const alreadyExists = await this.exists(model);
    let sequelizeVehicle: Vehicle;

    if (alreadyExists) {
      sequelizeVehicle = await Vehicle.findOne({
        where: { id: model.id },
      });
      await sequelizeVehicle.set(model);
    } else {
      sequelizeVehicle = new Vehicle(model);
    }

    return await sequelizeVehicle.save();
  }

  public async findById(id: number): Promise<VehicleInterface> {
    const result = await Vehicle.findByPk(id);
    return result;
  }

  public async getAll(): Promise<VehicleInterface[]> {
    const result = await Vehicle.findAll();
    return result;
  }

  public async deleteById(id: number): Promise<number> {
    return await Vehicle.destroy({ where: { id: id } });
  }
}
