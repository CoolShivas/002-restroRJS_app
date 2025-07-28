import MenuCards from "./MenuCards";
import MenuApis from "./MenuApis";
import { useState } from "react";

const Restro = () => {
  const [menuApiData, setMenuApiData] = useState(MenuApis);

  return (
    <>
      <MenuCards menuApiData={menuApiData}></MenuCards>
    </>
  );
};

export default Restro;
