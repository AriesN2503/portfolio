import "./Footer.scss";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import PropTypes from "prop-types";
import scrollToPath from "../../scrollToPath";

function Footer({ currentTheme }) {

     const handleScroll = (e, path) => {
          e.preventDefault();
          scrollToPath(path);
     };

     return (
          <div className={`footer ${currentTheme}`}>
               <footer className="text-center">
                    <div className="container">
                         <section className="links">
                              <div className="links-wrapper">
                                   <div className="link-item">
                                        <h6>
                                             <a href="#home" onClick={(e) => handleScroll(e, "home")}>Home</a>
                                        </h6>
                                   </div>
                                   <div className="link-item">
                                        <h6>
                                             <a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a>
                                        </h6>
                                   </div>
                                   <div className="link-item">
                                        <h6>
                                             <a href="#resume" onClick={(e) => handleScroll(e, "resume")}>Resume</a>
                                        </h6>
                                   </div>
                                   <div className="link-item">
                                        <h6>
                                             <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a>
                                        </h6>
                                   </div>
                              </div>
                         </section>
                         <hr className="divider" />
                         <section className="content">
                              <p>
                                   I&apos;m a passionate Frontend Developer dedicated to crafting intuitive and responsive web interfaces. Let’s build something amazing together!
                              </p>
                         </section>
                         <section className="social-icons">
                              <Link to="" className="icon"><Icon icon="fe:facebook" /></Link>
                              <Link to="" className="icon"><Icon icon="mdi:instagram" /></Link>
                              <Link to="" className="icon"><Icon icon="uil:linkedin" /></Link>
                              <Link to="" className="icon"><Icon icon="uiw:github" /></Link>
                         </section>
                    </div>
                    <div className="footer-bottom">
                         <p>
                              <small>
                                   Designed and developed by <strong>Truong Huy</strong>. All rights reserved © {new Date().getFullYear()}.
                              </small>
                         </p>
                    </div>
               </footer>
          </div>
     );
}

Footer.propTypes = {
     currentTheme: PropTypes.string.isRequired,
};

export default Footer;
