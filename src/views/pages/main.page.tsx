import { Card, Container } from "@mui/material";
import { MickAndMortyAutoComplete } from "@components/auto-complete/mick-and-morty.auto-complete";
import React from "react";

export const MainPage = () => {
  return (
    <Card elevation={3}>
      <MickAndMortyAutoComplete />
    </Card>
  );
};
