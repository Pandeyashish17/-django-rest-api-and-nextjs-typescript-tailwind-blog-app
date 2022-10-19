import { Button } from "@material-tailwind/react";
import React from "react";

const index = ({ data }: any) => {
  const {
    author,
    category,
    imagetitle,
    title,
    authorimage,
    description,
    updatedAt,
    publishedAt,
  } = data.data;
  return (
    <main className="">
      <article className="mx-auto max-w-3xl p-5">
        <div
          className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
          style={{ height: "24em" }}
        >
          <div className="absolute left-0 bottom-0 w-full h-full z-10"></div>
          <img
            src={`/api/image?title=${imagetitle}`}
            className="absolute left-0 top-0 w-full h-full z-0 object-cover"
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <Button ripple={true}>{category}</Button>
            <div className="flex mt-3">
              <img
                src={`http://127.0.0.1:8000/${authorimage}`}
                className="h-10 w-10 rounded-full mr-2 object-cover"
              />
              <div>
                <p className="font-semibold text-gray-200 text-sm">{author}</p>
                <p className="font-semibold text-gray-400 text-xs">
                  {new Date(publishedAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
      </article>
    </main>
  );
};

export default index;
