import React, { Component } from 'react';
import './Footer.css'
class Footer extends Component {
    
    render() {
        const date= new Date();
        return (
            <footer className="footer">
         <p>All rights reserved &#169; {date.getFullYear()}</p>
         <p className="links"><a rel="noopener noreferrer" target="_blank" href="https://github.com/J4Web"><i class="fa-brands fa-github"></i></a> &nbsp;  &nbsp; <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/j4web007" ><i class="fa-brands fa-twitter"></i></a></p>
  
  </footer>
        );
    }
}

export default Footer;
