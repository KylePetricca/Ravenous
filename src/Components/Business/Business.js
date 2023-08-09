import React from "react";
import styles from './business.module.css';

const business = {
  imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

function Business() {
  return (
    <div className={styles.business_card}>
      <div className={styles.business_img_container}>
        <img src={business.imageSrc} alt={business.name} className={styles.business_img}></img>
      </div>
      <h2 className={styles.business_header}>{business.name}</h2>
      <div className={styles.business_details}>
        <div className={styles.business_address}>
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{`${business.state} ${business.zipCode}`}</p>
        </div>
        <div className={styles.business_info}>
          <h3 className={styles.business_category}>{business.category.toUpperCase()}</h3>
          <h3 className={styles.business_rating}>{`${business.rating} stars`}</h3>
          <p>{`${business.reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
}

export default Business;
