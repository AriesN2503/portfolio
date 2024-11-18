import { Row, Col } from "antd";
import PropTypes from "prop-types";
import "./Header.scss";
import scrollToPath from "../../scrollToPath";

function Header({ toggleTheme, currentTheme }) {
    const handleScroll = (e, path) => {
        e.preventDefault();
        scrollToPath(path);
    };

    return (
        <Row className="header">
            <Col flex={1} className="brand">
                <a href="#home" onClick={(e) => handleScroll(e, "home")}><h1>&lt;Aries/&gt;</h1></a>
            </Col>

            <Col flex={10} className="items" align="center">
                <a href="#home" onClick={(e) => handleScroll(e, "home")}>Home</a>
                <a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a>
                {/* <a href="#resume" onClick={(e) => handleScroll(e, "resume")}>Resume</a> */}
                <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a>
            </Col>

            <Col flex={2} className="theme-switch">
                <input
                    type="checkbox"
                    className="theme-checkbox"
                    id="theme-toggle"
                    checked={currentTheme === "dark-theme"}
                    onChange={toggleTheme}
                />
                <label htmlFor="theme-toggle" className="theme-label">
                    <span className="sr-only">Toggle theme</span>
                </label>
            </Col>
        </Row>
    );
}

Header.propTypes = {
    toggleTheme: PropTypes.func.isRequired,
    currentTheme: PropTypes.string.isRequired,
};

export default Header;
