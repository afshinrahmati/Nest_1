import { CatRepository } from "./cat.repository";
export class CatService {
  private catRepo: CatRepository;
  constructor() {
    this.catRepo = new CatRepository();
  }

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
