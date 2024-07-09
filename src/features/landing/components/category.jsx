// import { Card } from '../../../components';
import { Link } from 'react-router-dom';
import { Card } from '../../../components';
import { black, creamy, roast } from '../../../utils/dummy';

export function Category() {
  return (
    <div className="container mx-auto px-4">
      <div className="py-5">
        <h2 className="text-xl font-semibold">Roast</h2>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide py-2">
          {roast.map((coffee, idx) => (
            <div key={idx} className="flex-shrink-0 w-40">
              <Link
                to={`/coffee/roast/${coffee.name.toLowerCase().replace(/ /g, '-')}`}
              >
                <Card
                  imageElement={coffee.image}
                  subtitle={coffee.subTitle}
                  price={coffee.price}
                  name={coffee.name}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* 2 */}
      <div className="py-5">
        <h2 className="text-xl font-semibold">Black</h2>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide py-2">
          {black.map((coffee, idx) => (
            <div key={idx} className="flex-shrink-0 w-40">
              <Link
                to={`/coffee/black/${coffee.name.toLowerCase().replace(/ /g, '-')}`}
              >
                <Card
                  imageElement={coffee.image}
                  subtitle={coffee.subTitle}
                  price={coffee.price}
                  name={coffee.name}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* 3 */}
      <div className="py-5">
        <h2 className="text-xl font-semibold">Creamy</h2>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide py-2">
          {creamy.map((coffee, idx) => (
            <div key={idx} className="flex-shrink-0 w-40">
              <Link
                to={`/coffee/creamy/${coffee.name.toLowerCase().replace(/ /g, '-')}`}
              >
                <Card
                  imageElement={coffee.image}
                  subtitle={coffee.subTitle}
                  price={coffee.price}
                  name={coffee.name}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
