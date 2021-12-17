import PropTypes from "prop-types";
import { BsEmojiSmile, BsEmojiNeutral } from "react-icons/bs";
import { ImSad } from "react-icons/im";

import classNames from "classnames/bind";
import styles from "./Statistics.module.scss";
let optionClass = classNames.bind(styles);

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={styles.List}>
      <li className={styles.Item}>
        <p className={styles.Text}>Good</p>
        <span className={optionClass(styles.Icons, styles.Good)}>
          <BsEmojiSmile style={{ width: 20, height: 20 }} />
        </span>
        <p className={styles.Statistic}>{good}</p>
      </li>
      <li className={styles.Item}>
        <p className={styles.Text}>Neutral</p>
        <span className={optionClass(styles.Icons, styles.Neutral)}>
          <BsEmojiNeutral style={{ width: 20, height: 20 }} />
        </span>
        <p className={styles.Statistic}>{neutral}</p>
      </li>
      <li className={styles.Item}>
        <p className={styles.Text}>Bad</p>
        <span className={optionClass(styles.Icons, styles.Bad)}>
          <ImSad style={{ width: 20, height: 20 }} />
        </span>
        <p className={styles.Statistic}>{bad}</p>
      </li>
      <li className={styles.Item}>
        <p className={styles.Text}>Total</p>
        <p className={styles.Statistic}>{total}</p>
      </li>
      <li className={styles.Item}>
        <p className={styles.Text}>Positive feedback</p>
        <p className={styles.Statistic}>{positivePercentage}%</p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistics;
