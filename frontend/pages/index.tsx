import type { NextPage } from "next";
import TopSlider from "../components/TopSlider";
import RecentPosts from "../components/RecentPosts";

interface RootObject {
  author: string;
  authorimage: string;
  category: number;
  description: string;
  excerpt: string;
  id: number;
  imagetitle: string;
  publishedAt: Date;
  title: string;
  updatedAt: Date;
}

const Home: NextPage<{ posts: RootObject }> = posts => {
  return (
    <>
      <div className="p-5">
        <TopSlider />
        <RecentPosts posts={posts} />
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:8000/articles/");
  const posts = await res.json();
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
}
