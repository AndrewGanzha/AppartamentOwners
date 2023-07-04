import { useState } from "react";
import Parse from "parse/dist/parse.min.js";
import { OwnerItem } from "./OwnerItem";

export const OwnersList = () => {
  const app_id = "IApa5N9uZumQafVLLG8KuKpwIxZrs6GWRAwisrxd";
  const host_url = "https://parseapi.back4app.com";
  const javascript_key = "e3DEAZ8eWuufDJwgrvjO1LkYV2b84y5z8RB03IgU";
  const [dataBase, setDataBase] = useState([]);

  Parse.initialize(app_id, javascript_key);
  Parse.serverURL = host_url;

  const fetchAllOwners = async () => {
    const query = new Parse.Query("Owner");
    const allOwners = await query.find();
    allOwners.forEach((item) => {
      console.log(item);
    });
  };

  return <ul></ul>;
};
