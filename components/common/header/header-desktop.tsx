import { Container, Stack, Link as MuiLink } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import * as React from "react";
import { ROUTE_LIST } from "./routes";
import clsx from "clsx";
import { useRouter } from "next/router";
export function HeaderDesktop() {
  const router = useRouter();
  return (
    <Box display={{ md: "block", xs: "none" }} py={2}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {ROUTE_LIST.map((route) => (
            <Link href={route.path} key={route.path} passHref>
              <MuiLink
                sx={{ mr: 2, fontWeight: "medium" }}
                underline="none"
                className={clsx({ active: router.pathname === route.path })}
              >
                {route.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
