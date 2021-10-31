import CartActionTypes from '@/redux/cart/cart.type'

export const addToCart = (product) => {
  return (dispatch, getState) => {
    const cart = getState().cart
    let item = {}
    console.log(cart)
    if (cart) {
      item = cart.find((item) => item.id === product.id)
    }

    if (item && cart) {
      dispatch(increaseQuantity(product.id))
    } else {
      dispatch({ type: CartActionTypes.ADD_TO_CART, payload: { ...product } })
    }
  }
}

export const removeItem = (id) => {
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload: { id }
  }
}

export const increaseQuantity = (id) => {
  return {
    type: CartActionTypes.INCREASE_QUANTITY,
    payload: { id }
  }
}

export const decreaseQuantity = (id) => {
  return {
    type: CartActionTypes.DECREASE_QUANTITY,
    payload: { id }
  }
}

export const clearItem = () => {
  return {
    type: CartActionTypes.CLEAR_ITEM
  }
}
