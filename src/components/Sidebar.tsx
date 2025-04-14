import { useEffect, useState } from "react";
import { useFilter } from "./FilterContext";

interface Product {
  category: string;
}
interface FetchResponse {
  products: Product[];
}
const SideBar = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "fashion",
    "trend",
    "shoes",
    "shirt",
  ]);
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    keyword,
    setKeyword,
  } = useFilter();
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data: FetchResponse = await res.json();
        const uniqueCategories = Array.from(
          new Set(data.products.map((product) => product.category))
        );
        setCategories(uniqueCategories);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value ? parseFloat(value) : undefined);
  };
  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxPrice(value ? parseFloat(value) : undefined);
  };
  const handleRadioCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  const handleKeywordClick = (keyword: string) => {
    setKeyword(keyword);
  };
  console.log(keyword);
  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setKeyword("");
  };
  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(String(value));
  };
  return (
    <div className="w-[64] h-screen p-5">
      <h1 className="text-2xl font-bold mt-4 mb-10">React Store</h1>
      <section>
        <input
          type="text"
          className="border-2 w-full rounded px-2 sm:mb-0 md:mb-1"
          placeholder="Search Product"
          value={searchQuery}
          onChange={handleQueryChange}
        />
        <div className="flex justify-center items-center">
          <input
            type="text"
            className="border-2 mr-2 mt-3 px-5 py-3 mb-3 w-full"
            placeholder="Min"
            value={minPrice ?? ""}
            onChange={handleMinPriceChange}
          />
          <input
            type="text"
            className="border-2 mr-2 mt-3 px-5 py-3 mb-3 w-full"
            placeholder="Max"
            value={maxPrice ?? ""}
            onChange={handleMaxPriceChange}
          />
        </div>
        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-3">Categories</h2>
        </div>
        {/* categories section */}
        <section>
          {categories.map((category, index) => (
            <label key={index} className="block mb-2">
              <input
                type="radio"
                name="category"
                value={category}
                onChange={() => handleRadioCategoryChange(category)}
                className="mr-2 w-[16px] h-[16px]"
                checked={selectedCategory === category}
              />
              {category.toUpperCase()}
            </label>
          ))}
        </section>
        {/* keyword section */}
        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-3">Keywords</h2>
        </div>
        <section>
          {keywords.map((keyword, index) => (
            <button
              key={index}
              onClick={() => handleKeywordClick(keyword)}
              className="block mb-2 px-4 py-2 w-full text-left border rounded hover:bg-gray-200"
            >
              {keyword.toUpperCase()}
            </button>
          ))}
        </section>
        <button
          onClick={handleReset}
          className="w-full mb-[4rem] py-2 bg-black text-white rounded mt-5"
        >
          Reset Filters
        </button>
      </section>
    </div>
  );
};

export default SideBar;
