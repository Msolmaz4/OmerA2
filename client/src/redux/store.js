import { applyMiddleware ,combineReducers ,createStore} from 'redux'

import { composeWithDevTools} from  'redux-devtools-extension'

import userReducer from './actions/user'

import thunk from 'redux-thunk'

const initialState = {

}

const reducers = combineReducers({
    user:userReducer

})

const store = createStore( reducers,initialState,composeWithDevTools(applyMiddleware(thunk)))

export default store