import PropTypes from 'prop-types';
export function Button({ children, className }) {
  return <button className={`py-2 px-4 ${className}`}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};
