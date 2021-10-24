import CartActionTypes from '@/redux/cart/cart.type'

export const increaseQuality = () => {
  return {
    type: CartActionTypes.INCREASE_QUALITY,
    payload: 10
  }
}
