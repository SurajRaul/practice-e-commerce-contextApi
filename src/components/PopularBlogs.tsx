import { MessageCircle, ThumbsUp } from "lucide-react";
import React from "react";

const PopularBlogs = () => {
  const data = [
    {
      title: "My amazing Blog Title 1",
      author: "Jordan",
      likes: 42,
      comments: 44,
    },
    {
      title: "My amazing Blog Title 2",
      author: "John",
      likes: 42,
      comments: 44,
    },
    {
      title: "My amazing Blog Title 3",
      author: "Huxp",
      likes: 42,
      comments: 44,
    },
  ];
  return (
    <div className="bg-white p-5 w-[23rem] mt-4 border ml-5 rounded">
      <h2 className="text-xl font-bold mb-5">Popular blogs</h2>
      <ul>
        {data.map((blog, index) => (
          <li key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <span className="font-bold mb-2">{blog.title}</span>
            </div>
            <span className="text-gray-600">Published by {blog.author}</span>
            <div className="flex items-center mt-2">
              <MessageCircle size={16} />
              <span className="mr-5 ml-1 text-gray-500">{blog.likes}</span>
              <ThumbsUp size={16} />
              <span className="text-gray-500 ml-1">{blog.comments}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularBlogs;
