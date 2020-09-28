import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{

    render(){
       
        return(
            <header className="header">
                <div className="title">
                    <h1>Streaming Demo</h1>
                </div>
                <div className="buttons">
                    <button className="btn" type="button">
                        <Link className="button" to="/">Login</Link>
                    </button>
                    <button className="btn" type="button">
                        <Link className="button" to="/">Register</Link>
                    </button>
                </div>
            </header>)
    }
}

export default Header;