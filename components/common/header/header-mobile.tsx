import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Link as MuiLink, Stack } from "@mui/material";
import { Box } from "@mui/system";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { ROUTE_LIST } from "./routes";

export interface HeaderMobileProps {}

export function HeaderMobile(props: HeaderMobileProps) {
  const router = useRouter();

  return (
    <Stack
      display="none"
      sx={{
        direction: "row",
        textAlign: "center",
        justifyContent: "space-between",
        alignItems: "flex-start",
        position: "absolute",
        top: 0,
        left: 0,
      }}
      className="menu"
    >
      <Box
        component="div"
        display="flex"
        flexDirection="column"
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.4)",
          width: "100px",
          height: "100vh",
        }}
      >
        {ROUTE_LIST.map((route) => (
          <Link href={route.path} key={route.path} passHref>
            <MuiLink
              sx={{ mr: 2 }}
              underline="none"
              className={clsx({ active: router.pathname === route.path })}
            >
              {route.label}
            </MuiLink>
          </Link>
        ))}
      </Box>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2, position: "absolute", top: 1, right: -320 }}
      >
        <MenuIcon />
      </IconButton>
    </Stack>
  );
}
