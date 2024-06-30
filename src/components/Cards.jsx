
import PropTypes from 'prop-types';

function Cards({ item }) {
  return (
    <>
      <div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src={item.image}
              alt="Plant"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Cards.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string,
  }).isRequired,
};

export default Cards;
