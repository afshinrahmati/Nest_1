import { readFile, writeFile } from "fs/promises";

export class CatRepository {
  async findOne(id: string) {
    const contents = await readFile("cat-information.json", "utf8");
    const cats = JSON.parse(contents);
    console.table(cats["info" + id]);
    if (cats["info" + id] == undefined) {
      return "No exit";
    }
    return cats["info" + id];
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

    cats["info" + id] = { name: data.name, id: data.id };
    await writeFile("cat-information.json", JSON.stringify(cats));
  }
}
