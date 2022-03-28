import { Container, Link as MuiLink, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { PostCard } from "./post-card";
export function RecentPage() {
  return (
    <Box component="section" bgcolor="#edf7fa">
      <Container>
        <Stack>
          <Typography>Recent Posts</Typography>
          <Link href="/blog" passHref>
            <MuiLink>View all</MuiLink>
          </Link>
        </Stack>
        <Stack>
          <Box>
            <PostCard />
          </Box>
          <Box>
            <PostCard />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
