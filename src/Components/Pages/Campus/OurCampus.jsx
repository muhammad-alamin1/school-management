import schoolImg from "../../../images/background.webp";
import cryBaby from "../../../images/cry-baby.png";
import muhammad from "../../../images/muhammad.jpeg";
import Footer from "../../Shared/Footer/Footer";
import Nav from "../../Shared/Nav/Nav";
import "./campus.css";

const gallerys = [
  {
    id: 1,
    link: `/page/our-campus`,
    img: schoolImg,
    title: "Campus",
  },
  {
    id: 2,
    link: ``,
    img: cryBaby,
    title: "Activities",
  },
  {
    id: 3,
    link: ``,
    img: muhammad,
    title: "Celebration",
  },
  {
    id: 4,
    link: ``,
    img: schoolImg,
    title: "Facilities",
  },
];

export default function OurCampus() {
  document.title = "BRUASS | Campus";
  return (
    <>
      <Nav />
      <div className="container" id="campus">
        <h2 className="my-5">Our campus</h2>

        <div className="row text-center my-5">
          {gallerys.map((gallery) => (
            <div class="card text-center" id="campusCard">
              <div class="card-body">
                <img src={gallery.img} alt={gallery.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
