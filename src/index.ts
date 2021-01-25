import { App } from "./app";

async function main() {
  const app = new App(8080);
  await app.IniciarServidor();
}

main();