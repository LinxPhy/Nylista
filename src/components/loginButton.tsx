import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    return(
        !isAuthenticated && (
            <button className='buttonStyle1' onClick={() => loginWithRedirect()}>
                Getting Started
            </button>
        )
    )

}

export default LoginButton;