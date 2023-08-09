import React from "react";
import styles from "./searchbar.module.css";

const sortingOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const renderSortingOptions = () => {
  return Object.keys(sortingOptions).map((option) => {
    let sortByOptionValue = sortingOptions[option];
    return <li key={sortByOptionValue}>{option}</li>;
  });
};

function SearchBar() {
  return (
    <div>
      <h1 className={styles.logo}>ravenous</h1>
      <div className={styles.header}>
        <div className={styles.sorting_options}>
          <ul>{renderSortingOptions()}</ul>
        </div>
        <div className={styles.inputs}>
          <input placeholder="Search Restaurants"></input>
          <input placeholder="Location"></input>
        </div>
        <div className={styles.submit}>
          <a>Search</a>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
