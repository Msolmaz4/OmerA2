import { applyMiddleware ,combineReducers ,createStore} from 'redux'

import { composeWithDevTools} from  'redux-devtools-extension'

import userReducer from './reducers/user'

import thunk from 'redux-thunk'
import modalReducer from './reducers/modal'
import postReducer from './reducers/text'

const initialState = {

}

const reducers = combineReducers({
    user:userReducer,
    modal:modalReducer,
    posts:postReducer

})

const store = createStore( reducers,initialState,composeWithDevTools(applyMiddleware(thunk)))

export default store