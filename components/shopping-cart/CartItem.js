import { useDispatch, useSelector } from 'react-redux'

import TouchSpin from '@/components/touch-spin/TouchSpin'
import { increaseQuality } from '@/redux/cart/cart.action'

const CartItem = () => {
  const dispatch = useDispatch()

  const handleNumberUp = () => {
    dispatch(increaseQuality())
  }

  const handleNumberDown = () => {
    console.log('down')
  }

  return (
    <div name="cart-item" className="grid grid-cols-12 gap-2">
      <div className="col-span-3">
        <img
          className="w-10/12 h-56 object-scale-down m-auto"
          src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
          alt=""
        />
      </div>
      <div className="col-span-6 font-bold">
        <div className="text-xl">Coat</div>
        <div className="text-md text-gray-500">Description</div>
        <div className="text-light-orange text-lg">$32</div>
      </div>
      <div className="col-span-2 flex self-start">
        <TouchSpin
          quality={10}
          handleNumberUp={handleNumberUp}
          handleNumberDown={handleNumberDown}
        />
      </div>
      <div className="col-span-1 flex self-start">
        <button className="py-1 px-2 bg-red-600 text-white rounded-md hover:bg-red-700">
          Delete
        </button>
      </div>
    </div>
  )
}

export default CartItem
