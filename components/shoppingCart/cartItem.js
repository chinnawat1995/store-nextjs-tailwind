import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import TouchSpin from '@/components/touchSpin/TouchSpin'
import { increaseQuantity, decreaseQuantity, removeItem } from '@/redux/cart/cart.action'

const CartItem = ({ product }) => {
  const dispatch = useDispatch()

  const handleNumberUp = () => {
    dispatch(increaseQuantity(product.id))
  }

  const handleNumberDown = () => {
    if (product.quantity <= 1) {
      const result = confirm('Do you want to delete this item?')
      if (result) {
        dispatch(removeItem(product.id))
      }
    } else {
      dispatch(decreaseQuantity(product.id))
    }
  }

  const handleDelete = () => {
    const result = confirm('Do you want to delete this item?')

    if (result) {
      dispatch(removeItem(product.id))
    }
  }

  return (
    <div name="cart-item" className="grid grid-cols-12 gap-2">
      <div className="col-span-3">
        <img className="w-10/12 h-56 object-scale-down m-auto" src={product.image} alt="" />
      </div>
      <div className="col-span-6 font-bold">
        <div className="text-xl truncate-custom">{product.title}</div>
        <div className="text-md text-gray-500 truncate-custom">{product.description}</div>
        <div className="text-light-orange text-lg">{`$${product.price}`}</div>
      </div>
      <div className="col-span-2 flex self-start">
        <TouchSpin
          quantity={product.quantity}
          handleNumberUp={handleNumberUp}
          handleNumberDown={handleNumberDown}
        />
      </div>
      <div className="col-span-1 flex self-start">
        <button
          onClick={handleDelete}
          type="button"
          className="py-1 px-2 bg-red-500 text-white rounded-md hover:bg-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

CartItem.prototype = {
  product: PropTypes.object.isRequired
}

export default CartItem
