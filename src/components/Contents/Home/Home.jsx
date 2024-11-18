import ImgBackground from "../../../assets/Photos/Background/Background3.jpg";
import PropTypes from "prop-types";
import { TypeAnimation } from "react-type-animation";
import "./Home.scss";
import scrollToPath from "../../../scrollToPath";

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
                        <button onClick={() => scrollToPath("resume")}>Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Home.propTypes = {
    currentTheme: PropTypes.string.isRequired,
};

export default Home;
