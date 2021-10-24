import { combineReducers } from 'redux'
import cartReducer from '@/redux/cart/cart.reducer'

const rootReducer = combineReducers({ cartReducer })

export default rootReducer
