import { Link } from "react-router-dom";
import schoolImg from "../../../images/background.webp";
import Footer from "../../Shared/Footer/Footer";
import Nav from "../../Shared/Nav/Nav";
import "./gallery.css";

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
    img: schoolImg,
    title: "Activities",
  },
  {
    id: 3,
    link: ``,
    img: schoolImg,
    title: "Celebration",
  },
  {
    id: 4,
    link: ``,
    img: schoolImg,
    title: "Facilities",
  },
];

export default function Gallery() {
  return (
    <>
      <Nav />
      <div className="container" id="gallery">
        <h2 className="my-5">Gallery</h2>

        <div className="row text-center my-5">
          {gallerys.map((gallery) => (
            <div class="card text-center" id="galleryCard">
              <Link to={gallery.link} className="text-dark" rel="noreferrer">
                <div class="card-body">
                  <img src={gallery.img} alt={gallery.title} />
                  <h3 className="my-2">{gallery.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
