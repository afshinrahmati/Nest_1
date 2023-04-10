import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootStrap(params: any) {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootStrap("op");
