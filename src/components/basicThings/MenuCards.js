import "../style.css";

const MenuCards = ({ menuApiData }) => {
  console.log(menuApiData); // Getting data on browser console;

  return (
    <section className="main-card--container">
      {menuApiData.map((currElement) => {
        return (
          <div className="card-container" key={currElement.id}>
            <div className="card">
              <div className="card-body">
                <span className="card-number card-circle subtitle">
                  {currElement.id}
                </span>
                <span className="card-author subtitle">
                  {currElement.category}
                </span>
                <h2 className="card-title">{currElement.name}</h2>
                <span className="card-description subtitle">
                  {currElement.description}
                </span>
                <div className="card-read">Read</div>
              </div>
              <img src={currElement.image} alt="image not found" />
              <span className="card-tag subtitle">Order Now</span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default MenuCards;
