import './login.css'
import Reading from '../../assets/reading_book.webp'
import Book from '../../assets/book_image.jpg'

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
                <button className='buttonStyle1'>
                    Sign In
                </button>

                <span className='title'>
                    Nylista
                </span>
            
            </div>

            
        </div>
    )

}

export default Login;
