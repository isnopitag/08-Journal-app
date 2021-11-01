import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator';
import { setError, removeError} from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';


export const RegisterScreen = () => {
  
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    name: 'Hernando',
    email: 'nando@gmail.com',
    password: '123456',
    password2: '123456'
  })
  
  const { name, email, password, password2 } = formValues;
  const {msgError} = useSelector( state => state.ui );

  

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()){
      dispatch(startRegisterWithEmailPasswordName(email,password, name))
      
  } 
  }

  const isFormValid = () => {

    if( name.trim().length === 0 ){
      dispatch(setError('Name is required'));
      return false;
    }else if( !validator.isEmail(email)){
      dispatch(setError('Email is required!'));
      return false;
    } else if ( password !== password2 || password.length < 5){
      dispatch(setError('Password should be at least 6 ch. or both must match'));
      return false;
    }
    dispatch(removeError())
    return true
  }

    return (
        <>
        <h3 className="auth__title">Register</h3>

        Register
        <form onSubmit={handleRegister}>
          { msgError && (<div className="className auth__alert-error">
            {msgError}
          </div>)}
          <input className="auth__input" type="text" placeholder="Name" name="name" autoComplete="off" value={name}  onChange={ handleInputChange}/>
          <input className="auth__input" type="text" placeholder="Email" name="email" autoComplete="off" value={email} onChange={ handleInputChange}/>
          <input className="auth__input" type="password" placeholder="Password" name="password"  value={password} onChange={ handleInputChange}/>
          <input className="auth__input" type="password" placeholder="Confirm" name="password2"  value={password2} onChange={ handleInputChange}/>
          <button type="submit" className="btn btn-primary btn-block mb-5">Register</button>
          
          <Link
          className="link"
          to="/auth/login"
          >
              Already register?
          </Link>
        </form>
      </>
    )
}
