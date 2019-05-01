import { 
    LOGIN_SUCCESS, 
    PASSWORD_RECOVER_SUCCESS, 
    SHOW_LOADER, 
    LOGIN_FAIL, 
    LOGOUT_SUCCESS, 
    LOGOUT_FAIL
} from '../actions';

const INITIAL_STATE = {
    user:null,
    error:null,
    loading:false
}

const auth = (state = INITIAL_STATE, action) => {
    switch(action.type){

        case SHOW_LOADER:
        return { ...state, loading:true, error:null}
        
        case LOGIN_SUCCESS:
        return {...state, ...INITIAL_STATE, user:action.user}

        case LOGIN_FAIL:
        case LOGOUT_FAIL:
        return {...state, ...INITIAL_STATE, error:action.error}

        case LOGOUT_SUCCESS:
        case PASSWORD_RECOVER_SUCCESS:        
        return {...state, ...INITIAL_STATE}

        default:
        return state;
    }
}

export default auth;