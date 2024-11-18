import ImgBackground from "../../../assets/Photos/Background/Background3.jpg";
import PropTypes from "prop-types";
import { TypeAnimation } from "react-type-animation";
import "./Home.scss";
import scrollToPath from "../../../scrollToPath";
import { Icon } from "@iconify/react/dist/iconify.js";

function Home({ currentTheme }) {

    return (
        <div className={`home ${currentTheme}`} id="home">
            <img src={ImgBackground} alt="Background illustration" className="background" />
            <div className="container">
                <div className="content">
                    <h1>Le Pham Truong Huy</h1>
                    {/* Typing Animation */}
                    <div className="animation-container">
                        <TypeAnimation
                            sequence={[
                                "Front-End Developer", // First text
                                10000, // Pause for 2s
                                "", // Clear the text
                                500, // Pause for 0.5s
                            ]}
                            wrapper="span"
                            speed={40}
                            repeat={Infinity}
                        />
                    </div>
                    {/* Navigation Buttons */}
                    <div className="button">
                        <button onClick={() => scrollToPath("about")}>About</button>
                        {/* <button onClick={() => scrollToPath("resume")}>Resume</button> */}
                    </div>
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
            </div>
        </div>
    );
}

Home.propTypes = {
    currentTheme: PropTypes.string.isRequired,
};

export default Home;
