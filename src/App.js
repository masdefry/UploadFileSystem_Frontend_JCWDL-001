import React from 'react'
import LandingPage from './Pages/LandingPage'
import SkeletonLoading from './Pages/Skeleteon'

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducer from './Redux/Reducers/Index'
const store = createStore(allReducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  );
}

export default App;