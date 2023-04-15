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

  async create({ name: string, age: number }) {
    const contents = await readFile("cat-information.json", "utf8");
    const cats = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    cats[id] = { id, contents };
    await writeFile("cat-information.json", JSON.stringify(cats));
  }
}
