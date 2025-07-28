import MenuCards from "./MenuCards";
import MenuApis from "./MenuApis";
import { useState } from "react";

const Restro = () => {
  const [menuApiData, setMenuApiData] = useState(MenuApis);

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button className="btn-group__item">Breakfast</button>
          <button className="btn-group__item">Lunch</button>
          <button className="btn-group__item">Evening</button>
          <button className="btn-group__item">Dinner</button>
          <button className="btn-group__item">All</button>
        </div>
      </nav>
      <MenuCards menuApiData={menuApiData}></MenuCards>
    </>
  );
};

export default Restro;
