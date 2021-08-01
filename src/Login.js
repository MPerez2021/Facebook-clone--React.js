import React from 'react'
import { Button } from '@material-ui/core'
import './Login.css'
import { auth, provider} from "./firebase"
import { useStateValue } from './StateProvider'
import { actionTypes } from './Reducer'

function Login() {
    //Enviar los datos al data layer
    const [state,dispath] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {            
            dispath({
                //La accion que se este ejecutando y el usuario que se haya tenido de respuesta
                //una vez hecho eso lo envia al data layer
                type: actionTypes.SET_USER,
                user: result.user
            })
            console.log(result.user);
        }).catch(
            (error) => alert(error.message));        
    }     
    return (
        <div className='login'>
            <div className='login__logo'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png'
                alt='' />
                <img src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg' alt=''/>
            </div>
            <Button type='submit' onClick={signIn}>
                Sign in
            </Button>        
        </div>
    )
}

export default Login
