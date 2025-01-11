import React from "react";

const CardSection = () => {
  const cards = [
    {
      title: "Feature 1",
      text: "Explore the amazing capabilities of Feature 1. It simplifies your tasks effortlessly.",
      imgSrc: "https://www.leafstudios.in/cdn/shop/files/1_1099cd20-7237-4bdf-a180-b7126de5ef3d_grande.png?v=1722230645",
    },
    {
      title: "Feature 2",
      text: "Experience the efficiency and reliability of Feature 2. It’s built just for you!",
      imgSrc: "https://rukminim2.flixcart.com/image/850/1000/xif0q/watch/f/0/i/1-digital-sports-men-s-kids-watch-for-boys-watch-for-men-digital-original-imahydw9dddkmzfk.jpeg?q=20&crop=false",
    },
    {
      title: "Feature 3",
      text: "Feature 3 brings innovation and creativity to the table. See it in action now.",
      imgSrc: "https://www.ethoswatches.com/the-watch-guide/wp-content/uploads/2021/06/Top-Watches-Under-Two-Lakh-Feat.jpg",
    }
    
  ];

  return (
    <div id="cards" className="container py-5">
      <h2 className="text-center mb-4">Our Features</h2>
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={card.imgSrc}
                className="card-img-top"
                alt={card.title}
                style={{ objectFit: "cover", height: "250px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <a href="#" className="btn btn-dark">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
