import React from 'react'

function Contact() {
    return (
        <footer className="footer" id="contact">
            <div className="footer-title">Bana Ulaşın</div>
            <div className="contact-info"><a href="#"><i className="fas fa-envelope"></i>frkntplglu@gmail.com</a></div>
            <div className="contact-info"><a href="#"><i className="fas fa-phone"></i>0543 336 97 69</a></div>
            <div className="social-links">
                <a href="https://github.com/frkntplglu" title="Github"><i className="fab fa-github"></i></a>
                <a href="https://twitter.com/frkntplglu" title="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/furkan-topalo%C4%9Flu-266a94121/" title="Linkedin"><i className="fab fa-linkedin"></i></a>
            </div>
        </footer>
    )
}

export default Contact
