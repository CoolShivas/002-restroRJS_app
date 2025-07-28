import "../style.css";

const MenuCards = ({ menuApiData }) => {
  console.log(menuApiData); // Getting data on browser console;

  return (
    <>
      {menuApiData.map((curr, ind) => {
        return (
          <>
            <div className="card-container">
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtitle">1</span>
                  <span className="card-author subtitle">Breakfast</span>
                  <h2 className="card-title">Maggie</h2>
                  <span className="card-description subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat nobis temporibus accusamus libero! Alias tempore
                    sequi quam eaque repudiandae, cum beatae sed eum ut quis!
                  </span>
                  <div className="card-read">Read</div>
                </div>
                <img alt="image not found" />
                <span className="card-tag subtitle">Order Now</span>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default MenuCards;
