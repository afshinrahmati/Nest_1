import { readFile, writeFile } from "fs/promises";

export class CatRepository {
  async findOne(id: string) {
    const contents = await readFile("cat-information.json", "utf8");
    const cats = JSON.parse(contents);
    return cats[id];
  }
  async findAll() {
    const contents = await readFile("cat-information.json", "utf8");
    const cats = JSON.parse(contents);
    return cats;
  }

  async create(data: { name: string; id: number }) {
    const contents = await readFile("cat-information.json", "utf8");
    const cats = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    cats[id] = { data };
    await writeFile("cat-information.json", JSON.stringify(cats));
  }
}
