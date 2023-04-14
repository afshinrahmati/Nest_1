import { Controller, Get, Post, Req, Body, Param } from "@nestjs/common";
import { Request } from "express";
import { CreateCatDto } from "./dtos/create-cat-dto";
@Controller("cat")
export class CatController {
  @Get("/")
  listCats() {
    return "Salam";
  }
  @Get(":id")
  getCat(@Param('id') id: string) {
    console.log(id)
  }

  @Post()
  createCat(@Req() req: Request, @Body() body: CreateCatDto) {
    console.log(req.body);
  }

}
