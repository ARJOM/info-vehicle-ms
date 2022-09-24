import VehicleRepository from "./../repository/vehicleRepository";
import vehicleInterface from "./../interfaces/vehicleInterface";

export default class VehicleService {
  private repository: VehicleRepository;

  constructor() {
    this.repository = new VehicleRepository();
  }

  save(vehicle: vehicleInterface) {
    console.log(vehicle);
    return this.repository.save(vehicle);
  }

  async list() {
    return await this.repository.getAll();
  }

  async getById(id: number) {
    return await this.repository.findById(id);
  }

  async update(id: number, updatedvehicle: vehicleInterface) {
    return await this.repository.save(updatedvehicle);
  }

  async delete(id: number) {
    return await this.repository.deleteById(id);
  }
}
