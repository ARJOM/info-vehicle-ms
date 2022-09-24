import App from "./app";

class Server {
  static start() {
    new App({ PORT: 3000 });
  }
}

Server.start();
