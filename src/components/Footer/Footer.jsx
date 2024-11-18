import { Icon } from '@iconify/react';
import PropTypes from "prop-types";
import scrollToPath from "../../scrollToPath";
import "./Footer.scss";

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
                                   {/* <div className="link-item">
                                        <h6>
                                             <a href="#resume" onClick={(e) => handleScroll(e, "resume")}>Resume</a>
                                        </h6>
                                   </div> */}
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
                              <a href="https://www.facebook.com/truonghuy.le.167/" className="icon" target="_blank" rel="noopener noreferrer">
                                   <Icon icon="fe:facebook" />
                              </a>
                              <a href="https://www.instagram.com/truong_huy2503/" className="icon" target="_blank" rel="noopener noreferrer">
                                   <Icon icon="mdi:instagram" />
                              </a>
                              <a href="https://www.linkedin.com/in/tr%C6%B0%E1%BB%9Dng-huy-l%C3%AA-ph%E1%BA%A1m-884496256/" className="icon" target="_blank" rel="noopener noreferrer">
                                   <Icon icon="uil:linkedin" />
                              </a>
                              <a href="https://github.com/AriesN2503" className="icon" target="_blank" rel="noopener noreferrer">
                                   <Icon icon="uiw:github" />
                              </a>
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
