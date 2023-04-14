import { Request } from "express";
import { CreateCatDto } from "./dtos/create-cat-dto";
export declare class CatController {
    listCats(): string;
    getCat(id: string): void;
    createCat(req: Request, body: CreateCatDto): void;
}
