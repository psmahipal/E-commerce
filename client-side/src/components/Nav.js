import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const data = JSON.parse(auth);
    // console.log("auth", data[0].name)

    const logout = () => {
        console.log("apple")
        localStorage.clear();
        navigate('/signup')
    }

    return (
        <div>
            {auth ?
                <ul className="nav-ul">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{}}>
                            <li><Link to="/">Products</Link></li>
                            <li><Link to="/add">Add Products</Link></li>
                            <li><Link to="/update"> Update Products</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li className='link_class'><Link to="/signup" onClick={logout}>Logout</Link></li>
                        </div>
                        <button style={{ border: '1px solid white', borderRadius: '50%', width: '40px', height: '40px', textAlign: 'center', backgroundColor: 'white', color: 'black',  fontWeight: 'bold', alignItems: 'center', display: 'flex', justifyContent: 'center', cursor: 'pointer' } }>
                            {data[0].name.charAt(0).toUpperCase()}
                        </button>
                    </div>
                </ul> :
                <ul className="nav-ul text-right">
                    <li className='link_class'><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            }
        </div>
    )
}

export default Nav;