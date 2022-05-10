import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import web3 from './web3/reducer'
// import counter from './counter/reducer'

const combinedReducer = combineReducers({
  // counter,
  web3,
})

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      // counter: {
      //   count: state.counter.count + action.payload.counter.count
      // },
      web3: {
        web3: [...new Set([...action.payload.web3.web3, ...state.web3.web3])]
      }
    }
    return nextState
  }
  else {
    return combinedReducer(state, action);
  }
}

const initStore = () => {
  return createStore(masterReducer, composeWithDevTools(
    applyMiddleware()
  ))
}

export const wrapper = createWrapper(initStore)