import ImgBackground from '../../../assets/Photos/Background/Background3.jpg'
import PropTypes from 'prop-types'
import { TypeAnimation } from 'react-type-animation';
import './Home.scss'

function Home({ currentTheme }) {
    return (
        <div className={`home ${currentTheme}`}>
            <div className="container-fluid">
                <img src={ImgBackground} alt="background" className='background' />
                <div className="content">
                    <h1>Le Pham Truong Huy</h1>
                    <div className="animation-container">
                        <TypeAnimation
                            sequence={[
                                'Font-End Developer',
                                10000,
                                '',
                                500,
                            ]}
                            wrapper="span"
                            speed={30}
                            repeat={Infinity}
                        />
                    </div>
                    <div className="button">
                        <a href='#about'><button>About</button></a>
                        <a href="#resume"><button>Resume</button></a>
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
