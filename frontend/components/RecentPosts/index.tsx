import React from "react";
import { Typography } from "@material-tailwind/react";
import RecentPostCard from "./RecentPostCard";

const index = ({ posts }: any) => {
  return (
    <div className="mt-8">
      <Typography variant="h2">Recent Posts</Typography>
      <div>
        <RecentPostCard posts={posts} />
      </div>
    </div>
  );
};

export default index;
