import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { CatModule } from "./cat/cat.module";

async function bootstrap() {
  const app = await NestFactory.create(CatModule);
  app.useGlobalPipes(
    new ValidationPipe()
  )
  await app.listen(3000);
}
bootstrap();
