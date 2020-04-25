import React from 'react';

function Footer() {


    

return (
        <div className="footer py-2" style={{backgroundColor:"#da3150"}}>
            <h5>Made with <i class="fas fa-heart"></i> by Qomsibe</h5>
            <div className="mt-2">
                <h5>Powered by</h5>
                <img style={{height:"56px"}} className="mx-2" src={require('../assets/img/trpl-logo.png')} alt=""/>
                <img style={{height:"56px"}} className="mx-2" src={require('../assets/img/technovokasi-logo.jpeg')} alt=""/>
            </div>


        </div>
)
}

export default Footer;
