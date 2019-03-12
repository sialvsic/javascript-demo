const INIT = '@@redux/INIT_' + Math.random().toString(36).substring(7);

export default function createStore(reducer, initialState, enhancer) {
  if(typeof initialState === 'function') {
    enhancer = initialState;
    initialState = undefined
  }

  let state = initialState;
  const listeners = [];

  const store = {
    getState() {
      return state
    },
    dispatch(action) {
      if(action && action.type) {
        state = reducer(state, action);
        listeners.forEach(listener => listener())
      }
    },
    subscribe(listener) {
      if(typeof listener === 'function') {
        listeners.push(listener)
      }
    }
  };

  if(typeof initialState === 'undefined') {
    store.dispatch({ type: INIT })
  }

  if(typeof enhancer === 'function') {
    return enhancer(store)
  }

  return store
}


export function compose(...funcs) {
  if(funcs.length === 0) {
    return arg => arg
  }
  if(funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

