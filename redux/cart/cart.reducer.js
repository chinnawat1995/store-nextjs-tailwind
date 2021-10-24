import produce from 'immer'

import CartActionTypes from '@/redux/cart/cart.type'

const initState = {
  test: 'test'
}

const cartReducer = produce((draft, action) => {
  const { type, payload } = action
  switch (type) {
    case CartActionTypes.ADD_ITEM:
      console.log('add_item')
      break
    case CartActionTypes.REMOVE_ITEM:
      console.log('REMOVE_ITEM')
      break
    case CartActionTypes.INCREASE_QUALITY:
      console.log('INCREASE_QUALITY')
      break
    case CartActionTypes.DECREASE_QUALITY:
      console.log('DECREASE_QUALITY')
      break
    default:
      return initState
  }
}, initState)

export default cartReducer
