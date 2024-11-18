import PropTypes from 'prop-types';
import About from "./About/About";
import Home from "./Home/Home";
import './Contents.scss'

function Contents({ currentTheme }) {
    return <>
        <div className={`contents ${currentTheme}`}>
            <Home currentTheme={currentTheme} />
            <About currentTheme={currentTheme} />
        </div>
    </>;

}

Contents.propTypes = {
    currentTheme: PropTypes.string.isRequired,
};
export default Contents;