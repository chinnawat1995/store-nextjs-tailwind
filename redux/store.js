import thunk from 'redux-thunk'
import rootReducer from '@/redux/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { persistStore } from 'redux-persist'

const logger = createLogger()

// ** init middleware
const middleware = [thunk, logger]

// ** Dev Tools
const composeEnhancers =
  (typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

// create a makeStore function
const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middleware)))

const persister = persistStore(store)

export { store, persister }
