import 'babel-polyfill'
import { createStore, combineReducers, applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'

import { 
    routerReducer, 
    routerMiddleware, 
    push 
} from 'react-router-redux'

import reducer from './reducer'
// import { helloSaga } from './sagas'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// const sagaMiddleware = createSagaMiddleware(helloSaga)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    reducer,
    router: routerReducer
  }),
  applyMiddleware(
    middleware
    // , 
    // sagaMiddleware
  )
)
// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

// sagaMiddleware.run()

export default store