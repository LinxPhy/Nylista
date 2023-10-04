import './login.css'
import { useAuth0 } from '@auth0/auth0-react'
import Book from '../../assets/book_image.jpg'
import LoginButton from '../../components/loginButton'

function Login() {

    return(
        <div className="login-section">

            <div className="login-section-image">
                <img src={Book} alt="Reading" />
            </div>

            <div className='login-section-form'>
                
                <p className='form-title'>
                    Hello Again, 
                </p>

                <p className='form-description'>
                    To get started, please press the button below
                </p>
                
                <LoginButton />

                <span className='title'>
                    Nylista
                </span>
            
            </div>

            
        </div>
    )

}

export default Login;
