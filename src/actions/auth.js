import { createUserWithEmailAndPassword, updateProfile,getAuth, signOut,signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebaseConfig';
import {types} from '../types/types';
import { finishLoading, startLoading } from './ui';
import Swal from 'sweetalert2'

export const startLoginEmailPassword = (email,password) => {
    return (dispatch) => {
        dispatch(startLoading());
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email,password)
        .then( async ( {user}) => {
            console.log('user :>> ', user);            
            dispatch(login(user.uid, user.displayName))
            dispatch(finishLoading());
        }).catch( e => {
            console.log('e :>> ', e);
            Swal.fire('Error', e.message, 'error')
            dispatch(finishLoading());
        })
        
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) =>{
    return(dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,password)
            .then( async( { user }) => {
                await updateProfile(user, {displayName: name})
                console.log('user :>> ', user);
            })
            .catch( e => {
                console.log('LOG', e);
                Swal.fire('Error', e.message, 'error')
            })
    }
}

 
export const startGoogleLogin = () =>{
    return (dispatch) =>{
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user}) =>{
                dispatch(login(user.uid, user.displayName))
            });
    }
}
export const login = (uid,displayName)  => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName 
        }
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        const auth = getAuth();
        await signOut(auth);
        dispatch(logout())
    }
}

export const logout = () => ({
    type: types.logout
})