import "./Navbar.scss";

const Navbar = ({
  sortingAscending,
  sortingDescending,
  sortingRate,
  sortingAtoZ,
  sortingZtoA,
  searchMovie,
  reset,
  searchInput,
  setSearchInput,
}) => {
  return (
    <>
      <nav>
        <button onClick={sortingAscending}>Sort by Date Ascending</button>
        <button onClick={sortingDescending}>Sort by Date Descending</button>
        <button onClick={sortingRate}>Sort by Rate</button>
        <button onClick={sortingAtoZ}>A-Z</button>
        <button onClick={sortingZtoA}>Z-A</button>
      </nav>
      <div className="search">
        <form>
          <input
            type="text"
            placeholder="Search for Movies"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
        </form>
        <button onClick={searchMovie}>Search</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default Navbar;
