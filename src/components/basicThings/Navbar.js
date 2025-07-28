const Navbar = ({ filterData, setMenuApiData, uniqCatListing }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {uniqCatListing.map((currentElement) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterData(currentElement)}
              >
                {currentElement}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
