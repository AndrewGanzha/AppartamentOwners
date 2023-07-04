import { useEffect, useState } from "react";
import Parse from "parse/dist/parse.min.js";
import { OwnerItem } from "./OwnerItem/OwnerItem";

export const OwnersList = () => {
  //Configure for dataBase
  const app_id = "IApa5N9uZumQafVLLG8KuKpwIxZrs6GWRAwisrxd";
  const host_url = "https://parseapi.back4app.com";
  const javascript_key = "e3DEAZ8eWuufDJwgrvjO1LkYV2b84y5z8RB03IgU";
  const [dataBase, setDataBase] = useState([]);

  //Initialise dataBase
  Parse.initialize(app_id, javascript_key);
  Parse.serverURL = host_url;

  const fetchAllOwners = async () => {
    const query = new Parse.Query("Owner");
    const allOwners = await query.find();
    await allOwners.forEach((item) => {
      dataBase.push(item.attributes);
    });
  };

  fetchAllOwners();
  return (
    <ul>
      {dataBase.map((item: object, i) => {
        return <OwnerItem key={i} {...item}></OwnerItem>;
      })}
    </ul>
  );
};
