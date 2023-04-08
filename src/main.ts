import { Controller, Get, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return "Hi there!";
  }
}

@Module({
  controllers: [AppController],
})
class AppModule {}

async function bootStrap(params: any) {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootStrap("op");
