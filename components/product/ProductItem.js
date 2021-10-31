import PropTypes from 'prop-types'
import RatingList from '@/components/rating/RatingList'

const ProductItem = ({ product }) => {
  return (
    <a className="p-1" href={`/products/${product.id}`}>
      <div className="h-96 flex justify-center overflow-hidden">
        <img
          className="self-center w-10/12 transform transition duration-500 ease-in-out hover:scale-125"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="mt-6">
        <div className="h-14 truncate-custom">
          <h3 className="text-lg font-bold">{product.title}</h3>
        </div>
        <div className="my-1">
          <RatingList score={product.rating.rate} />
        </div>
        <div>
          <span className="text-light-orange text-lg font-bold">{`$${product.price}`}</span>
        </div>
      </div>
    </a>
  )
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductItem
