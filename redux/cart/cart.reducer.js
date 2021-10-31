import produce from 'immer'

import CartActionTypes from '@/redux/cart/cart.type'

const initState = []

const cartReducer = produce((draft, action) => {
  const { type, payload } = action
  switch (type) {
    case CartActionTypes.ADD_TO_CART:
      draft.push({ ...{ quantity: 1 }, ...payload })

      break
    case CartActionTypes.REMOVE_ITEM:
      const index = draft.findIndex((item) => item.id === payload.id)

      if (index !== -1) {
        draft.splice(index, 1)
      }
      break
    case CartActionTypes.CLEAR_ITEM:
      return initState
    case CartActionTypes.INCREASE_QUANTITY:
      draft.map((item) => {
        if (item.id === payload.id) {
          item.quantity += 1
        }

        return item
      })
      break
    case CartActionTypes.DECREASE_QUANTITY:
      draft.map((item) => {
        if (item.id === payload.id) {
          item.quantity -= 1
        }

        return item
      })
      break
    default:
      return initState
  }
}, initState)

export default cartReducer
