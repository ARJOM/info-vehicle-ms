import VehicleInterface from "interfaces/vehicleInterface";
import {
  Table,
  Column,
  Model,
  AllowNull,
  PrimaryKey,
} from "sequelize-typescript";
import { DataType } from "sequelize-typescript";

@Table
class Vehicle extends Model implements VehicleInterface {
  @AllowNull(false)
  @PrimaryKey
  @Column(DataType.NUMBER)
  id: number;

  @AllowNull(false)
  @Column(DataType.TEXT)
  placa: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  chassi: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  renavam: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  modelo: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  marca: string;

  @AllowNull(false)
  @Column(DataType.NUMBER)
  ano: number;
}

export default Vehicle;
