import React, { useEffect, useState } from "react";

interface Author {
  name: string;
  isFollowing: boolean;
  image: string;
}
const TopSellers = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        const data = await response.json();
        const authorsData: Author[] = data.results.map((itm: any) => ({
          name: `${itm.name.first}${itm.name.last}`,
          isFollowing: false,
          image: itm.picture.medium,
        }));
        setAuthors(authorsData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleFollowClick = (index: number) => {
    setAuthors((prevAuthor) =>
      prevAuthor.map((author, i) =>
        i === index ? { ...author, isFollowing: !author.isFollowing } : author
      )
    );
  };
  console.log(authors);
  return (
    <div className="bg-white mt-[5rem] p-5 mx-5 w-[23rem] rounded border">
      <h1 className="text-xl mb-5">Top sellers</h1>
      <ul>
        {authors.map((author, index) => (
          <li key={index} className="flex items-center justify-between mb-4">
            <section className="flex justify-center items-center">
              <img
                src={author.image}
                alt={author.name}
                className="h-[25%] w-[25%] justify-center rounded-full"
              />
              <span className="ml-4 text-gray-700">{author.name}</span>
            </section>
            <button
              onClick={() => handleFollowClick(index)}
              className={`py-1 px-3 rounded ${
                author.isFollowing
                  ? "bg-red-500 text-white"
                  : "bg-black text-white"
              }`}
            >
              {author.isFollowing ? "UnFollow" : "Follow"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSellers;
