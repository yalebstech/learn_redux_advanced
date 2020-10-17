import * as actionTypes from '../actions/actionTypes' 
import { updateObject } from '../utility'

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading:false,
    authRedirectPath: '/'
}



const authSuccess = (state, action) => {
    return updateObject( state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
    })
}

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    })
} 

const authStart = (state, action) => {
    return updateObject(state, { error: null, loading:true})
}

const authLogout = (state, action) => {
    return updateObject(state, {token:null, userId:null})
}

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, {authRedirectPath: action.path })
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
       case actionTypes.AUTH_START: return authStart(state, action)
       break;
       case actionTypes.AUTH_SUCCESS: return authSuccess(state, action)
       break;
       case actionTypes.AUTH_FAIL: return authFail(state, action)
       break;
       case actionTypes.AUTH_LOGOUT: return authLogout(state, action)
       default: return state;
       case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action)
   }
}

export default reducer