import { VehicleMapper } from "./../mappers/vehicleMapper";
import VehicleRepository from "./../repository/vehicleRepository";
import vehicleInterface from "./../interfaces/vehicleInterface";

export default class VehicleService {
  private repository: VehicleRepository;

  constructor() {
    this.repository = new VehicleRepository();
  }

  save(vehicle: vehicleInterface) {
    if (VehicleMapper.validate(vehicle)) {
      if (vehicle.ano < 1916 || vehicle.ano > new Date().getFullYear() + 1) {
        throw new Error("O ano informado parece incorreto");
      }
      return this.repository.save(vehicle);
    }
    throw new Error("Todos os campos precisam ser preenchidos");
  }

  async list() {
    return await this.repository.getAll();
  }

  async getById(id: number) {
    return await this.repository.findById(id);
  }

  async update(id: number, updatedvehicle: vehicleInterface) {
    if (
      (updatedvehicle.ano && updatedvehicle.ano < 1916) ||
      updatedvehicle.ano > new Date().getFullYear() + 1
    ) {
      throw new Error("O ano informado parece incorreto");
    }
    return await this.repository.save({ id, ...updatedvehicle });
  }

  async delete(id: number) {
    return await this.repository.deleteById(id);
  }
}
