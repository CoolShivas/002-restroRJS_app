import MenuApis from "./MenuApis";

const Navbar = ({ filterData, setMenuApiData }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button
            className="btn-group__item"
            onClick={() => filterData("breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterData("lunch")}
          >
            Lunch
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterData("evening")}
          >
            Evening
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterData("dinner")}
          >
            Dinner
          </button>
          <button
            className="btn-group__item"
            onClick={() => setMenuApiData(MenuApis)}
          >
            All
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
