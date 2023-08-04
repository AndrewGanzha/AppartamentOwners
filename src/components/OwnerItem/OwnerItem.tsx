import * as React from "react";
import { DeleteButton } from "../Button";
import OwnersService from "../../service/OwnerService";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

interface OwnerItemProps {
  Name: string;
  City: string;
  Date: string;
  Age: string;
  Child: boolean;
  id: string;
}

export const OwnerItem = ({
  Name,
  City,
  Date,
  Age,
  Child,
  id,
}: OwnerItemProps) => {
  async function deleteOwner(id: string) {
    const response = await OwnersService.deleteItem(id);
  }

  return (
    <Box sx={{ width: "100%", maxWidth: 1200, bgcolor: "background.paper" }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
              Имя владельца: {Name}
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
          Место рождения: {City}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          Дата заселения: {Date}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          Возраст: {Age}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          Есть ли дети: {Child ? "да" : "нет"}
        </Typography>
        <DeleteButton deleteOwner={deleteOwner} id={id}>
          Удалить пользователя
        </DeleteButton>
      </Box>
    </Box>
  );
};
