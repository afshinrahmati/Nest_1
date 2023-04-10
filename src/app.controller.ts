import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/asdf")
  getRootRoute() {
    return "Hi there!";
  }
  @Get("/afs")
  getByeThere() {
    return "salam salm";
  }
}
// npx ts-node-dev src/main.ts
// 8
