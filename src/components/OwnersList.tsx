import { useEffect, useState } from "react";
import { OwnerItem } from "./OwnerItem/OwnerItem";
import OwnersService from "../service/OwnerService";
import { Stack } from "@mui/material";

interface ItemProps {
  id: string;
  attributes?: object;
}

export const OwnersList = () => {
  const [owners, setOwners] = useState([]);

  async function fetchOwners() {
    const response = await OwnersService.getAll();
    setOwners(response);
  }

  useEffect(() => {
    fetchOwners();
  }, [owners]);

  return (
    <Stack
      sx={{ m: 2 }}
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      useFlexGap
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
    >
      {owners.map((item: ItemProps) => {
        return (
          <OwnerItem
            Name={""}
            City={""}
            Date={""}
            Age={""}
            Child={false}
            key={item.id}
            {...item.attributes}
            id={item.id}
          />
        );
      })}
    </Stack>
  );
};
