import express, { Express, json, Request, Response } from "express";
import { Sequelize } from "sequelize-typescript";

interface AppConfig {
  PORT?: number;
}

class App {
  public main: Express;
  public db: Sequelize | undefined;

  constructor({ PORT }: AppConfig) {
    this.main = express();
    this.config();
    this.connectDatabase();
    this.routes();
    this.listen(PORT ? PORT : 3333);
  }

  private listen(PORT: number): void {
    this.main.listen(PORT, () => {
      console.log(`Server is open in port ${PORT}`);
    });
  }

  private connectDatabase(): void {
    this.db = new Sequelize({
      dialect: "sqlite",
      storage: "./database.sqlite",
      sync: { alter: true },
      define: { paranoid: true },
      models: [__dirname + "/model"],
    });

    this.db.sync(); // cria tabelas
    this.db
      .authenticate()
      .then(() => console.log("Connected to database"))
      .catch((err) => console.error(err));
  }

  private routes(): void {
    this.main.get("/api/v1", (req: Request, res: Response) => {
      return res.status(200).json({
        name: "info-vehicle-ms",
        version: "1.0.0",
      });
    });
  }

  private config(): void {
    this.main.use(json());
  }
}

export default App;
