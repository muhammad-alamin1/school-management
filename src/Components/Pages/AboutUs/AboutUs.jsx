import {
  faBook,
  faGraduationCap,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import schoolPhoto from "../../../images/background.webp";
import Footer from "../../Shared/Footer/Footer";
import Nav from "../../Shared/Nav/Nav";
import "./aboutUs.css";

const facilitys = [
  {
    id: 1,
    icon: faGraduationCap,
    title: `Scholarship Facility`,
    describe: `Dorem Ipsum has been the industry's standard dummy text ever
    since the en an unknown printer galley dear.`,
  },
  {
    id: 2,
    icon: faUser,
    title: `Scholarship Facility`,
    describe: `Dorem Ipsum has been the industry's standard dummy text ever
    since the en an unknown printer galley dear.`,
  },
  {
    id: 3,
    icon: faBook,
    title: `Book Library & Store`,
    describe: `Dorem Ipsum has been the industry's standard dummy text ever
    since the en an unknown printer galley dear.`,
  },
  {
    id: 4,
    icon: faBook,
    title: `Skilled Lecturers`,
    describe: `Dorem Ipsum has been the industry's standard dummy text ever
    since the en an unknown printer galley dear.`,
  },
];

export default function AboutUs() {
  return (
    <>
      <Nav />
      <div className="container" id="aboutUs">
        <div className="row">
          <div className="col-md-6 my-5">
            <div className="my-4">
              <h2>Who We Are</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="my-4">
              <h2>What We Do</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="col-md-6 my-5">
            <img src={schoolPhoto} alt="img" />
          </div>
        </div>
        <div>
          <div className="text-center my-5">
            <h2>Why Choose Our Institution?</h2>
            <p>
              Tmply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been theindustry's standard dummy text ever since the
              1500s, when an unknown printer took.
            </p>
          </div>
          <div className="row text-center my-5 ">
            <div className="col d-flex">
              {facilitys.map((facility) => (
                <div>
                  <FontAwesomeIcon
                    icon={facility.icon}
                    style={{ fontSize: "3rem", marginBottom: "2rem" }}
                  />
                  <h3>{facility.title}</h3>
                  <spall>{facility.describe}</spall>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
