import styles from "../domainSection/domain.module.scss";
import domainPriceData from "@/mockdata/domainPriceMockdata";
import Image from "next/image";
import { useState } from "react";

const DropdownSelect = ({ currency, handleCurrencyChange }) => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

// const handleDropdownToggle = () => {
//   setIsDropdownOpen(!isDropdownOpen);
// };

  return (
    <div className={styles.dropdownWrap}>
      <select
        name="currencySelect"
        value={currency}
        onChange={handleCurrencyChange}
        className={`${styles.customSelect} ${styles.withArrow}`}
      >
        <option value="">.com</option>
        {domainPriceData.map((item, index) => (
          <option key={index} value={item.currency}>
            {item.currency}
          </option>
        ))}
      </select>
      {/* <span className={`${styles.arrowIcon} ${isDropdownOpen ? styles.rotated : ''}`}
      onClick={handleDropdownToggle}>
        <Image
          src="/images/card/down-arrow.svg"
          width={17}
          height={9}
          alt="down arrow"
        />
      </span> */}
    </div>
  );
};

export default DropdownSelect;
