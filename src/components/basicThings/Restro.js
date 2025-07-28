import Navbar from "./Navbar";
import MenuCards from "./MenuCards";
import MenuApis from "./MenuApis";
import { useState } from "react";

const uniqueCategList = [
  ...new Set(
    MenuApis.map((curEle) => {
      return curEle.category;
    })
  ),
];
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
      <Navbar filterData={filterData} setMenuApiData={setMenuApiData}></Navbar>
      <MenuCards menuApiData={menuApiData}></MenuCards>
    </>
  );
};

export default Restro;
