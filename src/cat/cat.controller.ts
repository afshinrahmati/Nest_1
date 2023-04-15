import {
  Controller,
  Get,
  Post,
  Req,
  Body,
  Param,
  NotFoundException,
} from "@nestjs/common";
import { Request } from "express";
import { CreateCatDto } from "./dtos/create-cat-dto";
import { CatService } from "./cat.service";
@Controller("cat")
export class CatController {
  catService: CatService;
  constructor() {
    this.catService = new CatService();
  }
  @Get("/")
  listCats() {
    const cat = this.catService.findAll();
    if (cat) {
      throw new NotFoundException("I Am so Sorry");
    }
    return cat;
  }
  @Get(":id")
  getCat(@Param("id") id: string) {
    console.log(id);
    return this.catService.findOne(id);
  }

  @Post()
  createCat(@Req() req: Request, @Body() body: CreateCatDto) {
    return this.catService.create(body);
  }
}
