import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.scss';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const { btn, buttons } = styles;
  return (
    <>
      <div className={buttons}>
        {options.map((id, index, array) => {
          return index !== array.length - 1 ? (
            <button className={btn} onClick={onLeaveFeedback} key={id}>
              {id}
            </button>
          ) : (
            <button className={btn} onClick={onLeaveFeedback} key={id}>
              {id}
            </button>
          );
        })}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
