import express, { Express, Request, Response } from "express";

interface AppConfig {
  PORT?: number;
}

class App {
  public main: Express;

  constructor({ PORT }: AppConfig) {
    this.main = express();
    this.routes();
    this.listen(PORT ? PORT : 3333);
  }

  private listen(PORT: number): void {
    this.main.listen(PORT, () => {
      console.log(`Server is open in port ${PORT}`);
    });
  }

  private routes(): void {
    this.main.get("/api/v1", (req: Request, res: Response) => {
      return res.status(200).json({
        name: "info-vehicle-ms",
        version: "1.0.0",
      });
    });
  }
}

export default App;
