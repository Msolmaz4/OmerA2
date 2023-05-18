import { applyMiddleware ,combineReducers ,createStore} from 'redux'

import { composeWithDevTools} from  'redux-devtools-extension'

import userReducer from './reducers/user'

import thunk from 'redux-thunk'
import modalReducer from './reducers/modal'

const initialState = {

}

const reducers = combineReducers({
    user:userReducer,
    modal:modalReducer

})

const store = createStore( reducers,initialState,composeWithDevTools(applyMiddleware(thunk)))

export default store