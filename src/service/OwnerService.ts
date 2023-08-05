import Parse from "parse/dist/parse.min.js";
const app_id = "IApa5N9uZumQafVLLG8KuKpwIxZrs6GWRAwisrxd";
const host_url = "https://parseapi.back4app.com";
const javascript_key = "e3DEAZ8eWuufDJwgrvjO1LkYV2b84y5z8RB03IgU";
export const dataBase = [];

export default class OwnersService {
  static async getAll() {
    Parse.initialize(app_id, javascript_key);
    Parse.serverURL = host_url;
    const query = new Parse.Query("Owner");
    const allOwners = await query.find();
    return allOwners;
  }
  static async deleteItem(id: string) {
    const owner = new Parse.Object("Owner");
    owner.set("id", id);
    try {
      //destroy the object
      const result = await owner.destroy();
      alert("Object deleted with objectId: " + result.id);
      this.getAll();
    } catch (error: any) {
      alert("Failed to delete object, with error code: " + error.message);
    }
  }
  static async addItem(
    name: string,
    city: string,
    date: string,
    age: number,
    child: boolean
  ) {
    Parse.initialize(app_id, javascript_key);
    Parse.serverURL = host_url;

    const Owners = Parse.Object.extend("Owner");
    const owner = new Owners();

    owner.set("Name", name);
    owner.set("Age", age);
    owner.set("City", city);
    owner.set("Date", date);
    owner.set("Child", child);
    owner.save();
    console.log(owner);
    try {
      //Save the Object
      const result = await owner.save();
      alert("Object updated with objectId: " + result.id);
    } catch (error: any) {
      alert("Failed to update object, with error code: " + error.message);
    }
  }
}
