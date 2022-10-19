import React from "react";
import axios from "axios";
import type { NextPage } from "next";
import DynamicPostPage from "../../components/DynamicPostPage";
interface RootObject {
  author: string;
  authorimage: string;
  category: number;
  description: string;
  imagetitle: string;
  publishedAt: Date;
  title: string;
  updatedAt: Date;
}

const Post: NextPage<{ data: RootObject }> = (data) => {
  console.log(data);
  return <DynamicPostPage data={data} />;
};

export default Post;

export const getStaticPaths = async () => {
  const res = await axios("http://127.0.0.1:8000/articles/");
  const data = res.data;

  const paths = data.map((curElem: any) => {
    return {
      params: {
        id: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await axios(`http://127.0.0.1:8000/articles/${id}`);
  const data = res.data;
  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};
