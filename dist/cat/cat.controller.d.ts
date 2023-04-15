import { Request } from "express";
import { CreateCatDto } from "./dtos/create-cat-dto";
import { CatService } from "./cat.service";
export declare class CatController {
  catService: CatService;
  constructor();
  listCats(): Promise<any>;
  getCat(id: string): Promise<any>;
  createCat(req: Request, body: CreateCatDto): Promise<void>;
}
