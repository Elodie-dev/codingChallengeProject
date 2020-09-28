import React from 'react';


class Footer extends React.Component{

    render(){
       
        return(
            <footer className="footer">
                <nav className="nav">
                    <a className="nav-link active" href="/">Home</a>
                    <a className="nav-link" href="/">Terms and Conditions</a>
                    <a className="nav-link" href="/">Privacy Policy</a>
                    <a className="nav-link" href="/">Collection Statement</a>
                    <a className="nav-link" href="/">Help</a>
                    <a className="nav-link" href="/">Manage Account</a>
                </nav>
                <p>Copyright <a href="https://www.themoviedb.org/">The Movie DB</a> &copy;</p>
                <div className="sn">
                    <i className="fab fa-facebook fa-2x"></i>
                    <i className="fab fa-instagram fa-2x"></i>
                    <i className="fab fa-twitter-square fa-2x"></i>
                </div>
            </footer>)
    }
}

export default Footer;