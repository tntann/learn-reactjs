import React, { useState } from "react";
import useHackerNewsAPI from "../../hook/useHackerNewsAPI";

const HackerNewsWithHook = () => {
  const [query, setQuery] = useState("");
  const { data, setUrl, loading, errorMessage } = useHackerNewsAPI(
    `https://hn.algolia.com/api/v1/search?query=${query}`,
    {
      hits: [],
    }
  );
  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          placeholder="Typing your keywords..."
          className="border border-gray-400 block w-full p-5 rounded-md focus:border-blue-500 transition-all"
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
          className="bg-blue-600 text-white font-semibold p-5 rounded-md flex-shrink-0 hover:bg-blue-500"
        >
          Search
        </button>
      </div>
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}
      {!loading && errorMessage && (
        <p className="text-red-500 my-5">{errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          data.hits.length > 0 &&
          data.hits.map((item) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={item.title} className="p-3 bg-gray-100 rounded-md">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsWithHook;
