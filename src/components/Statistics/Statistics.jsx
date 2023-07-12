import propTypes from "prop-types";
import css from "./Statistics.module.css"

export const Statistics = ({ good, neutral, bad }) => (
  <ul className={css.feedbackList}>
    <li className={css.feedbackListItem}>Good: {good}</li>
    <li className={css.feedbackListItem}>Neutral: {neutral}</li>
    <li className={css.feedbackListItem}>Bad: {bad}</li>
  </ul>
);

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
}