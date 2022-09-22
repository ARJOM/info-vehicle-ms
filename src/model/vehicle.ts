import { Table, Column, Model, AllowNull } from "sequelize-typescript";
import { DataType } from "sequelize-typescript";

@Table
class Vehicle extends Model {
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
