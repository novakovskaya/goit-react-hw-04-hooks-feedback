import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.scss";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.List}>
      {options.map((option) => (
        <li key={option} className={styles.Item}>
          <button
            type="button"
            className={styles.Button}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
};

export default FeedbackOptions;
