import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1><Link to="/">Health Grade</Link></h1>
            <div className="links">
                <Link to="/register">Register</Link>
                <Link to="/symptoms">Symptoms</Link>               
                <Link to="/results">Test Results</Link>
                <Link to="/dataset">Dataset</Link>
                <Link to="/patient">Patient Info</Link>
            </div>
        </nav>
    )
}

export default Navbar;