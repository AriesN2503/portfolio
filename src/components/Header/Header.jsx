import { Row, Col } from "antd";
import PropTypes from 'prop-types'

import './Header.scss';

function Header({ toggleTheme, currentTheme }) {
    return (
        <Row className="header">
            <Col flex={1} className="brand">
                <a href="#home"><h1>&lt;Aries/&gt;</h1></a>
            </Col>

            <Col flex={10} className="items" align='center'>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#resume">Resume</a>
                <a href="#contact">Contact</a>
            </Col>
            <Col flex={2} className="theme-switch">
                <label htmlFor="theme-switch" className="switch">
                    <input
                        id="theme-switch"
                        type="checkbox"
                        onChange={toggleTheme}
                        checked={currentTheme === 'light-theme'}
                    />
                    <span className="slider"></span>
                    <span className="moon"></span>
                    <span className="sun"></span>
                </label>
            </Col>
        </Row >
    );
}

Header.propTypes = {
    toggleTheme: PropTypes.func.isRequired,
    currentTheme: PropTypes.string.isRequired,
};

export default Header;