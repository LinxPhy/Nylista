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

                <h6>Topics</h6>

                <ul>
                    <li><Link to={'/main'}>Main</Link></li>
                    <li><button>Create Topic</button></li>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar;