import VehicleInterface from "../interfaces/vehicleInterface";
import Vehicle from "../model/vehicle";

export class VehicleMapper {
  static toDTO(vehicle: Vehicle): VehicleInterface {
    const result: VehicleInterface = {
      id: vehicle.id,
      placa: vehicle.placa,
      chassi: vehicle.chassi,
      renavam: vehicle.renavam,
      modelo: vehicle.modelo,
      marca: vehicle.marca,
      ano: vehicle.ano,
    };
    return result;
  }

  static validate(vehicle: VehicleInterface): Boolean {
    return (
      !!vehicle.placa &&
      !!vehicle.chassi &&
      !!vehicle.renavam &&
      !!vehicle.modelo &&
      !!vehicle.marca &&
      !!vehicle.ano
    );
  }
}
