import propTypes from "prop-types";
import css from "./NotificationMessage.module.css";

export const NotificationMessage = ({message}) => <p className={css.message}>{message}</p>;

NotificationMessage.propTypes = {
    message: propTypes.string.isRequired,
};
