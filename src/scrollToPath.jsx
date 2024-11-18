import PropTypes from "prop-types";

function scrollToPath(path) {
    const target = document.getElementById(path);
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
}

scrollToPath.propType = {
    path: PropTypes.string.isRequired
}

export default scrollToPath