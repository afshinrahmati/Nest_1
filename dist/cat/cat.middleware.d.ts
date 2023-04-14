import { NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
export declare class catMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void;
}
