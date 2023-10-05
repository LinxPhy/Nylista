import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();
    const [params, setParams] = useState(location.pathname.split('/')[1]);
    

    useEffect(() => {
        setParams(location.pathname.split('/')[1]);
    }, [location.pathname]);

    return(
        <nav>
            <div>
                <ul>
                    <li className={params == '' ? 'navbar-active' : ''}>
                        <Link to={'/'} >Home</Link>
                    </li>
                    <li className={params == 'topics' ? 'navbar-active' : ''}>
                        <Link to={'/topics'} >Topics</Link>
                    </li>
                    <li className={params == 'favourites' ? 'navbar-active' : ''}>
                        <Link to={'/favourites'}>Favourites</Link>
                    </li>
                    <li className={params == 'create' ? 'navbar-active' : ''}>
                        <Link to={'/create'} >Create</Link>
                    </li>
                </ul>
            </div>

            <div>
                <ul>
                    <li><Link to={'/main'}>Main</Link></li>
                    <button className='buttonStyle1'>Create Topic</button>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar;