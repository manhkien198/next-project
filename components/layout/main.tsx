import { Button, Container, Stack, SwipeableDrawer } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { Header } from "../common/header/index";
import { Footer } from "../common/footer";
import SwipeableTemporaryDrawer from "../common/header/toogle-menu";

export interface LayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <SwipeableTemporaryDrawer />
      <Header />
      <Box component="main" flexGrow={1}>
        <Container>{children}</Container>
      </Box>
      <Footer />
    </Stack>
  );
}
