import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

export const MainLayout = () => {
  return (
    <Container maxWidth={"sm"} sx={{ py: 6 }}>
      <Outlet />
    </Container>
  );
};
