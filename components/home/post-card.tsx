import { Card, CardContent } from "@mui/material";
import * as React from "react";

export interface PostCardProps {}

export function PostCard(props: PostCardProps) {
  return (
    <Card>
      <CardContent>card title</CardContent>
    </Card>
  );
}
