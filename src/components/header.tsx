import { useAuth0 } from '@auth0/auth0-react'
import Person from '../icons/person.svg'

const Header = () => {

    return(
        <header>
            <div className='header-items'>
                <span className="title">Nylista</span>

                <div className='searchBarArea'>
                    <input type="text" className='inputStyle1' placeholder="Search"/>
                    <span className="material-symbols-outlined">search</span>
                </div>
    
            </div>
            
            

        </header>
    )

}

export default Header;