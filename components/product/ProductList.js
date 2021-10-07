import PropTypes from 'prop-types'

import ProductItem from '@/components/product/ProductItem'

const ProductList = (props) => {
  return (
    <div className="grid grid-cols-4 gap-4 row-auto">
      {props.products.map((product) => {
        return <ProductItem product={product} key={product.id} />
      })}
    </div>
  )
}

ProductList.propsType = {
  'props.product': PropTypes.object.isRequired
}

export default ProductList
