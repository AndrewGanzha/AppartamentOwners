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
  }
}
