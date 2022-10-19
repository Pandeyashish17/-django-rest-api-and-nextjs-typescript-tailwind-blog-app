import React from "react";
import Card from "./Card";

const index = ({ posts }: any) => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {posts.posts.map((post:any,i:number) => {
        return <Card post={post}  key={i}/>;
      })}
    </div>
  );
};

export default index;
