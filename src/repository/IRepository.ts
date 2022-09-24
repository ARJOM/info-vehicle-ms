export interface IRepository<M> {
  exists(id: M): Promise<boolean>;
  save(model: M): Promise<M>;
  findById(id: number): Promise<M>;
  getAll(): Promise<M[]>;
  deleteById(id: number): Promise<number>;
}
