const SearchBar = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <img
            src="user-search.svg"
            alt="search"
            className="w-5 h-5 text-gray-500"
          />
        </div>
        <input
          type="text"
          id="table-search"
          className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50"
          placeholder="Search for members"
        />
      </div>
    </>
  );
};

export default SearchBar;
