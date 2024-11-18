import PropTypes from "prop-types";
import "./About.scss";
import { Col, Image, Row } from "antd";
import avatar from "../../../assets/Photos/Avatar/my_image.jpg";

function About({ currentTheme }) {
  return (
    <div className={`about ${currentTheme}`} id="about">
      <div className="container">
        <div className="content">
          <h1 className="title-about">About Me</h1>
          <div className="content-about">
            <Row
              gutter={[20, 20]}
              style={{ display: "flex", alignItems: "center" }}
            >
              {/* Image Section */}
              <Col xs={24} md={8} className="content-about-image">
                <Image
                  className="avatar-img"
                  src={avatar}
                  alt="Profile picture of Le Pham Truong Huy"
                  preview={{
                    minScale: 0.1,
                    src: avatar,
                  }}
                  style={{ width: "100%", borderRadius: "10%" }}
                  onError={(e) => (e.target.src = avatar)}
                />
              </Col>
              {/* Text Section */}
              <Col xs={24} md={16} className="content-about-text">
                <p>
                  I am a third-year <strong>Software Engineering</strong> student at{" "}
                  <strong>FPT University</strong>, looking for a{" "}
                  <strong>Front-End Developer</strong> internship to gain practical experience and
                  contribute to impactful projects.
                </p>
                <br />
                <h2>Objective</h2>
                <p>
                  Aiming to enhance my front-end development skills through real-world projects while
                  contributing to the company&apos;s success.
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

About.propTypes = {
  currentTheme: PropTypes.string.isRequired,
};

export default About;
