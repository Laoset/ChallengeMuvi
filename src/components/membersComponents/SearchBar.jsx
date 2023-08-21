const SearchBar = () => {
  return (
    <>
      <label className="sr-only">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <img
            src="user-search.svg"
            alt="search"
            className="w-5 h-5 text-gray-500"
          />
        </div>
        <input
          type="text"
          id="table-search"
          className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500  "
          placeholder="Search for items"
        />
      </div>
    </>
  );
};

export default SearchBar;
