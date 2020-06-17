import React from 'react';

function Footer() {

return (
        <div className="footer py-2 text-white" style={{backgroundColor:"#da3150"}}>
        <h5>Made with <i class="fas fa-heart"></i> by Hanafi</h5>
          <span>
            <a href="https://www.instagram.com/hananhnfi"><p className="px-1 text-white" style={{display:"inline"}}>Instagram <i class="fab fa-instagram"></i></p></a>
            <a href="https://www.linkedin.com/in/hanan-hanafi-702897174"><p className="px-1 text-white" style={{display:"inline"}}>Linkedin <i class="fab fa-linkedin"></i></p></a>
            <a href="https://twitter.com/han2afi"><p className="px-1 text-white" style={{display:"inline"}}>Twitter <i class="fab fa-twitter"></i></p></a>
          </span>
        </div>
)
}

export default Footer;
