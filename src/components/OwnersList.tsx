import { useEffect, useState } from "react";
import { OwnerItem } from "./OwnerItem/OwnerItem";
import OwnersService from "../service/OwnerService";

export const OwnersList = () => {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    fetchOwners();
  }, []);

  async function fetchOwners() {
    const response = await OwnersService.getAll();
    setOwners(response);
  }

  return (
    <ul>
      {owners.map((item) => {
        return <OwnerItem key={item.id} {...item.attributes} />;
      })}
    </ul>
  );
};
