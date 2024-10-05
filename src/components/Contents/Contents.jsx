import Home from "./Home/Home";
import PropTypes from 'prop-types'

function Contents({ currentTheme }) {
    return <>
        <Home currentTheme={currentTheme} />
    </>;

}

Contents.propTypes = {
    currentTheme: PropTypes.string.isRequired,
};
export default Contents;