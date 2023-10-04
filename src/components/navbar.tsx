import { Link } from 'react-router-dom';

const Navbar = () => {

    return(
        <nav>
            <div>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/topics'}>Topics</Link></li>
                    <li><Link to={'/favourites'}>Favourites</Link></li>
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