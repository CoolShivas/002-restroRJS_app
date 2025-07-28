import MenuCards from "./MenuCards";
import MenuApis from "./MenuApis";
import { useState } from "react";

const uniqueCategList = new Set(
  MenuApis.map((curEle) => {
    return curEle.category;
  })
);
console.log(uniqueCategList);

const Restro = () => {
  const [menuApiData, setMenuApiData] = useState(MenuApis);

  const filterData = (categories) => {
    const updatedFilterData = MenuApis.filter((curr) => {
      return curr.category === categories;
    });

    setMenuApiData(updatedFilterData);
  };

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
      <MenuCards menuApiData={menuApiData}></MenuCards>
    </>
  );
};

export default Restro;
