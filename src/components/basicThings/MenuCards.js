import "../style.css";

const MenuCards = ({ menuApiData }) => {
  console.log(menuApiData); // Getting data on browser console;

  return (
    <section className="main-card--container">
      {menuApiData.map((currElement) => {
        const { id, image, name, category, price, description } = currElement; // Destructuring the currElement;
        return (
          <div className="card-container" key={id}>
            <div className="card">
              <div className="card-body">
                <span className="card-number card-circle subtitle">{id}</span>
                <span className="card-author subtitle">{category}</span>
                <h2 className="card-title">{name}</h2>
                <span className="card-description subtitle">{description}</span>
                <div className="card-read">Read</div>
              </div>
              <img src={image} alt="image not found" />
              <div className="span-price-order">
                <span className="card-price">{price}</span>
                <span className="card-tag subtitle">Order Now</span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default MenuCards;
