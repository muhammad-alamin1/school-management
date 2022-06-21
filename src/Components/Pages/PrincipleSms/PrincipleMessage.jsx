import muhammad from "../../../images/background.webp";
import Footer from "../../Shared/Footer/Footer";
import Nav from "../../Shared/Nav/Nav";

export default function PrincipleMessage() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row my-5">
          <div className="col-md-4">
            <img src={muhammad} alt="principle" style={styleImg} />
          </div>
          <div className="col-md-8">
            <h2 style={{ fontWeight: "bold" }}>Message From Principal</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const styleImg = {
  width: "100%",
  height: "auto",
  borderRadius: "10px",
};
