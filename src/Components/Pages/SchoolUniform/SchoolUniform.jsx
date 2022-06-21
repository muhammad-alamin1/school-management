import Footer from "../../Shared/Footer/Footer";
import Nav from "../../Shared/Nav/Nav";
import "./uniform.css";

export default function SchoolUniform() {
  return (
    <>
      <Nav />
      <div className="container my-5" id="uniform">
        <h2 className="my-5" style={{ fontWeight: "bold" }}>
          School Uniform
        </h2>
        <div>
          <h5>SCHOOL UNIFORM</h5>
          <p>
            The school uniform is to be worn as specified here below during the
            week; and each item must be labelled with the students Name & Class.
            All students must wear the School uniform daily. A pupil who is not
            dressed neatly and tidily in the full school uniform may not be
            permitted to sit in the class. The newly admitted students must
            start wearing the school uniform within two weeks of their
            admission.
          </p>
        </div>

        <div className="my-5 uniform-para">
          <h5 className="my-3">GENERAL UNIFORM (Sun to Tue)</h5>
          <p>
            <strong>Boys:</strong> Bottle green full pants, white and green
            striped shirt ,tie and school belt, white socks with two green
            stripes black lace-up shoes.
          </p>
          <p>
            <strong>Girls:</strong> Bottle green full pants, white and green
            striped shirt ,tie and school belt, white socks with two green
            stripes black lace-up shoes.
          </p>
        </div>

        <div className="my-5 uniform-para">
          <h5 className="my-3">SPORTS UNIFORM </h5>
          <p>
            <strong>Boys:</strong> Bottle green full pants, white and green
            striped shirt ,tie and school belt, white socks with two green
            stripes black lace-up shoes.
          </p>
          <p>
            <strong>Girls:</strong> Bottle green full pants, white and green
            striped shirt ,tie and school belt, white socks with two green
            stripes black lace-up shoes.
          </p>
        </div>

        <div className="my-5 uniform-para">
          <h5 className="my-3">WINTER UNIFORM</h5>
          <p>
            <strong>Boys:</strong> Bottle green full pants, white and green
            striped shirt ,tie and school belt, white socks with two green
            stripes black lace-up shoes.
          </p>
          <p>
            <strong>Girls:</strong> Bottle green full pants, white and green
            striped shirt ,tie and school belt, white socks with two green
            stripes black lace-up shoes.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
