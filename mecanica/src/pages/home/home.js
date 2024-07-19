import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBolt,
  faBurger,
  faBars,
  faIndustry,
  faScrewdriverWrench,
  faGear,
  faStar,
  faLaptop,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  padding: 0;
  margin: 0;
  margin-bottom: 1rem;
  color: #e6002b;
  font-family: "Montserrat";
  background-color: #292f46;
`;

const Navbar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem;
  background-color: #292f46;
  z-index: 1000; /* Ensure the navbar is above other elements */
`;

const IntroContainer = styled.div`
  margin: auto;
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
`;

const ImageContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
`;

const VerticalAlignContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

const TextContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Home = () => {
  return (
    <Container>
      <Navbar id="navbar">
        <div className="col-6">
          <VerticalAlignContainer>
            <img
              src="./contorno_branco.png"
              alt="logo"
              style={{ width: "30%", display: "block", marginLeft: "3rem" }}
            />
          </VerticalAlignContainer>
        </div>
        <div className="col-6">
          <TextContainer>
            <button type="button" className="btn btn-danger">
              QUOTE ME!
            </button>
          </TextContainer>
        </div>
      </Navbar>
      <div style={{ paddingTop: "60px" }}>
        {" "}
        {/* Add padding to avoid content being hidden behind the navbar */}
        <div className="row m-auto" style={{ height: "100%" }}>
          <div className="col-7 m-0 p-0">
            <IntroContainer>
              <div style={{ fontSize: "16px", textAlign: "left" }}>
                <h6 style={{ fontSize: "50px" }}>
                  <span style={{ color: "#e6002b" }}>PREMIUM</span> MACHINES
                </h6>
                <p>
                  ProxiMach is a multifaced company that covers a wide range of
                  applications, such as:
                </p>
                <p>
                  <FontAwesomeIcon icon={faBolt} /> Industrial Automation
                </p>
                <p>
                  <FontAwesomeIcon icon={faBurger} /> Food industry
                </p>
                <p>
                  <FontAwesomeIcon icon={faBars} /> Medium duty industry: metal
                  conforming
                </p>
                <p>
                  <FontAwesomeIcon icon={faIndustry} /> Heavy duty industry:
                  hydraulic heavy duty machines
                </p>
                <p>
                  <FontAwesomeIcon icon={faScrewdriverWrench} /> Assembling
                  stations
                </p>
                <p>
                  <FontAwesomeIcon icon={faGear} /> Auxiliary systems:
                  conveyors, feeders, etc
                </p>
                <p>
                  <FontAwesomeIcon icon={faStar} /> Supplementary systems:
                  product quality verification stations and test bench systems
                  (according to given Standards)
                </p>
                <p>
                  <FontAwesomeIcon icon={faLaptop} /> Digital machine park
                  overview: ProxInfo platform with predictive maintenance and
                  data presentation
                </p>
              </div>
            </IntroContainer>
          </div>
          <div
            className="col-5 m-0"
            style={{ paddingBottom: "2rem", paddingRight: "2rem" }}
          >
            <ImageContainer>
              <img src="red_burro.png" alt="burro" style={{ width: "100%" }} />
            </ImageContainer>
          </div>
        </div>
        <div className="row py-2 pt-4 m-auto">
          <TextContainer>
            <h2>MECHANICAL SERVICES</h2>
          </TextContainer>
        </div>
        <div className="row m-auto">
          <div className="col-4 p-0">
            <img
              src="https://cdn.cadcrowd.com/3d-models/49/07/49078524-d56c-47c1-a510-03620f7fd361/gallery/f5f767ea-bb31-45ef-87fd-0adcd303e03b/medium.jpg"
              alt="Machine with pneumatics CAD"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-4 p-0">
            <img
              src="https://forums.autodesk.com/t5/image/serverpage/image-id/959127iBE7BAA0FBB4B6B50?v=v2"
              alt="Pneumatic scheme CAD"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-4 p-0">
            <img
              src="https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/1f88a940117542ca4bbf77f3e8b9473f/large.jpg"
              alt="Hydraulic scheme CAD"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="row py-2 m-auto">
          <TextContainer>
            <h2>ELECTRICAL SERVICES</h2>
          </TextContainer>
        </div>
        <div className="row m-auto">
          <div className="col-4 p-0">
            <img
              src="https://cdn.cadcrowd.com/3d-models/49/07/49078524-d56c-47c1-a510-03620f7fd361/gallery/f5f767ea-bb31-45ef-87fd-0adcd303e03b/medium.jpg"
              alt="Machine with pneumatics CAD"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-4 p-0">
            <img
              src="https://forums.autodesk.com/t5/image/serverpage/image-id/959127iBE7BAA0FBB4B6B50?v=v2"
              alt="Pneumatic scheme CAD"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-4 p-0">
            <img
              src="https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/1f88a940117542ca4bbf77f3e8b9473f/large.jpg"
              alt="Hydraulic scheme CAD"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="row py-2 m-auto">
          <TextContainer>
            <h2>DIGITAL SERVICES</h2>
          </TextContainer>
        </div>
        <div className="row m-auto">
          <div className="col-4 p-0">
            <img
              src="https://cdn.cadcrowd.com/3d-models/49/07/49078524-d56c-47c1-a510-03620f7fd361/gallery/f5f767ea-bb31-45ef-87fd-0adcd303e03b/medium.jpg"
              alt="Machine with pneumatics CAD"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-4 p-0">
            <img
              src="https://forums.autodesk.com/t5/image/serverpage/image-id/959127iBE7BAA0FBB4B6B50?v=v2"
              alt="Pneumatic scheme CAD"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-4 p-0">
            <img
              src="https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/1f88a940117542ca4bbf77f3e8b9473f/large.jpg"
              alt="Hydraulic scheme CAD"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="row m-auto mt-4">
          <div className="col-6">
            <div className="row m-auto">
              <TextContainer>
                <img
                  src="./proximach_copyright.png"
                  alt="logo"
                  style={{ width: "260px", display: "block" }}
                />
              </TextContainer>
            </div>
            <div className="row m-auto mt-1">
              <p>
                <b>Premium</b> <span style={{ color: "white" }}>Machines</span>
              </p>
            </div>
            <div className="row m-auto" style={{ color: "white" }}>
              <p>
                <span className="me-4"><FontAwesomeIcon icon={faLinkedinIn} /></span>
                <span className="me-4"><FontAwesomeIcon icon={faEnvelope} /></span>
                <span><FontAwesomeIcon icon={faYoutube} /></span>
              </p>
            </div>
          </div>
          <div className="col-6">
            <TextContainer>
              <div
                style={{ fontSize: "16px", textAlign: "left", color: "white" }}
              >
                <p className="m-0">Rua Santo Ildefonso 296</p>
                <p>4000-507 Porto</p>
                <a href="#" style={{ textDecoration: "none" }}>
                  <p className="m-0" style={{ color: "#e6002b" }}>
                    geral@proximach.com
                  </p>
                </a>
                <a href="#" style={{ textDecoration: "none" }}>
                  <p className="m-0" style={{ color: "#e6002b" }}>
                    +351 966 969 961
                  </p>
                </a>
              </div>
            </TextContainer>
          </div>
        </div>
        <p className="mt-4" style={{ color: "white", fontSize: "11px" }}>
          As a project and manufacturing startup, we ensure the best quality and
          safety standards to our clients. Machine products have ProxiMach seal
          of EU conformity, resulting in a CE associated certification.
          ProxiMach provides product documentation, instructions of use,
          identification of technical standards, list of parts and test results,
          along with the safety regulations and descriptions associated with
          each machine. Operator control and handling, as well as human
          ergonomics is design-guaranteed by ProxiMach.
        </p>
      </div>
    </Container>
  );
};
