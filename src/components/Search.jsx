import { FaSearch } from "react-icons/fa";

function Search({ query, handleQuery }) {
  return (
    <div className="flex overflow-hidden w-full max-w-md gap-2">
    <div className="flex items-center bg-white rounded-xl shadow-md overflow-hidden w-full max-w-md">
      <input
        type="text"
        placeholder="Search memes..."
        value={query}
        onChange={(e) => handleQuery(e.target.value)}
        className="flex-grow px-4 py-3 text-gray-700 focus:outline-none"
      />
      
    </div>
    <button className="bg-black rounded-lg text-white px-4 py-3">
        <FaSearch />
      </button>
    </div>
  );
}

export default Search;
