import { useEffect, useState } from "react";
import { OwnerItem } from "./OwnerItem/OwnerItem";
import OwnersService from "../service/OwnerService";

export const OwnersList = () => {
  async function fetchOwners() {
    const response = await OwnersService.getAll();
  }

  return <ul></ul>;
};
