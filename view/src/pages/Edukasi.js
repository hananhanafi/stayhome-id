import React,{ Component } from "react";
import './edukasi.css';
import VideoEdukasi from '../components/edukasi/VideoEdukasi';
import Informasi from '../components/edukasi/Informasi';
import Saran from '../components/edukasi/Saran';
import Mitos from '../components/edukasi/Mitos';

class Edukasi extends Component{
    render(){

        return (
        <div className="App-header">

            <div className="container">
                
                <VideoEdukasi/>
                <Informasi/>
                <Saran/>
                <Mitos/>
            </div>



            </div>
        )
    }
}

export default Edukasi;