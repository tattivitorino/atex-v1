import firebase from 'firebase';
import NavigationService from '../services/NavigationService';

export const SHOW_LOADER = 'SHOW_LOADER';
export const showLoader = show => ({
    type:SHOW_LOADER,
    show
})

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = user => ({
    type:LOGIN_SUCCESS,
    user
});

export const LOGIN_FAIL = 'LOGIN_FAIL';
export const loginFail = error => ({
    type:LOGIN_FAIL,
    error
});

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const logoutSuccess = () => ({
    type:LOGOUT_SUCCESS
});

export const LOGOUT_FAIL = 'LOGOUT_FAIL';
export const logoutFail = error => ({
    type:LOGOUT_FAIL,
    error
});

export const PASSWORD_RECOVER_SUCCESS = 'PASSWORD_RECOVER_SUCCESS';
export const passwordRecoverSuccess = () => ({
    type:PASSWORD_RECOVER_SUCCESS
})

export const login = ({ email, password }) =>{
    return dispatch => {
        return new Promise((resolve, reject)=>{
            //console.log(email, password);

            dispatch(showLoader(true))

            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user=>{
                dispatch(loginSuccess(user));
                NavigationService.navigate('App');
                return resolve(user);
            })
            .catch(err=>{
                const msg = getErrorMessageByCode(err.code);
                dispatch(loginFail(msg));
                return reject(msg)
            })                       
        })
    }
}

export const logout = () => {
    return dispatch => {
        return new Promise((resolve, reject)=>{
        
            dispatch(showLoader(true));

            firebase.auth().signOut()
            .then(()=>{
                dispatch(logoutSuccess())
                NavigationService.navigate('Auth');
                return resolve(true)
            })
            .catch(err=>{
                const msg = getErrorMessageByCode(err.code);
                dispatch(logoutFail(msg));
                return reject(msg)
            })
        });
    }
}

export const recoverPassword = ({ email }) => {
    return dispatch => {
        return new Promise((resolve, reject)=>{
            console.log(email);

            dispatch(showLoader(true))

            setTimeout(()=>{
                
                dispatch(passwordRecoverSuccess());
                
                return resolve(true);
            }, 3000) 
        })
    }
}

// ***************** HELPER FUNCTIONS ********************

const getErrorMessageByCode = (code) => {
    switch (code) {
        case 'auth/wrong-password':
            return 'A Senha está incorreta';
        case 'auth/user-not-found':
            return 'Usuário não encontrado';
        default:
            return 'Erro desconhecido';
    }
}
