import { Inject, Injectable } from "@nestjs/common";
import { CatRepository } from "./cat.repository";

// interface Repository {
//   findOne(id: string);
//   findAll();
//   create(data: { name: string; id: number });
// }
@Injectable()
export class CatService {
  constructor(public catRepo: CatRepository) {}

  async findOne(id: string) {
    return this.catRepo.findOne(id);
  }

  async findAll() {
    return this.catRepo.findAll();
  }
  async create(data: { name: string; id: number }) {
    return this.catRepo.create(data);
  }
}
