import React from "react";
import Business from "../Business/Business";
import styles from "./businesslist.module.css";

const BusinessList = () => {
    return (
        <div className={styles.business_list}>
            {Array(6).fill(true).map((item, i) => {
                return <Business key={i} />
            })}
        </div>
    );
};

export default BusinessList;