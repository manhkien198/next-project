import { Button, Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import * as React from "react";
import Img from "../../images/avt.jpeg";
export function HeroSection() {
  return (
    <Box component="section" pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        <Stack
          textAlign={{ xs: "center", md: "left" }}
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems={{ xs: "center", md: "flex-start" }}
          justifyContent="space-between"
        >
          <Box>
            <Typography
              component="h1"
              variant="h3"
              sx={{
                fontWeight: "bold",
              }}
              mb={{ xs: 3.5, md: 5 }}
            >
              Hi,I am John, <br />
              Creative Technologist
            </Typography>
            <Typography component="p" mb={{ xs: 3.5, md: 5 }}>
              My first nextjs Project
            </Typography>
            <Button sx={{ mt: "20px" }} variant="contained">
              Download Resume
            </Button>
          </Box>
          <Box
            sx={{
              borderRadius: "50%",
              overflow: "hidden",
              minWidth: "250px",
              height: "250px",
              boxShadow: "-5px 13px #EDF7FA",
            }}
            mb={{ xs: 4 }}
          >
            <Image src={Img} alt="avatar" width="250px" height="250px" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
