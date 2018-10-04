import { combineReducers } from 'redux'

import { reducer as reduxFormReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import Posts from '../reducers/postReducer'

const reducers = combineReducers({
    form: reduxFormReducer,
    toastr: toastrReducer,
    post: Posts
})

export default reducers;