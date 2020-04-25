import React,{ Component } from "react";
import {Link} from 'react-router-dom';


class Navbar extends Component{
    render(){
        return(
            <div>
                <img src={require('../assets/img/stayhome-logo.png')} alt=""/>

                <nav style={{backgroundColor:"#da3150"}}  className="navbar navbar-expand-lg navbar-light text-white">
                    <div className="container">

                        <a style={{color:"white"}} className="navbar-brand" href="#">
                            #StayHome
                            </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li  className="nav-item">
                            <Link style={{color:"white"}} className="nav-link" to="/"><i className="fas fa-home"></i> BERANDA<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                            <Link style={{color:"white"}} className="nav-link" to="/berita"><i className="fas fa-newspaper"></i> BERITA</Link>
                            </li>
                            <li className="nav-item">
                            <Link style={{color:"white"}} className="nav-link" to="/konten"><i className="fas fa-book-reader"></i> EDUKASI</Link>
                            </li>
                            <li className="nav-item">
                            <Link style={{color:"white"}} className="nav-link" to="/blog"><i className="fas fa-book-reader"></i> BLOG</Link>
                            </li>
                            
                            <li className="nav-item">
                            <Link style={{color:"white"}} className="nav-link" to="/hotline"><i className="fas fa-headset"></i> HOTLINE</Link>
                            </li>
                            
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;