import PropTypes from 'prop-types';

export function Card({ imageElement, name, subtitle, price }) {
  return (
    <div className="overflow-hidden">
      <div className="relative">
        <img
          src={imageElement}
          alt={name}
          className="w-full h-48 object-contain"
        />
      </div>
      <div className="p-4 text-center text-[#1F1F1F]">
        <h3 className="text-sm font-bold">{name}</h3>
        <p className="text-xs">{subtitle}</p>
        <p className="text-xs mt-2">${price}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  imageElement: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

Card.defaultProps = {
  subtitle: '',
};
