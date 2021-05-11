import Button from "elements/Button";
import Star from "elements/Star";

import TestimonialAccent from "../assets/images/testimonial-landingpages-frame.jpg";

const Testimony = ({ data }) => {
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-auto" style={{ marginRight: 70 }}>
          <div className="testimonial-hero" style={{ margin: "30px 0 0 30px" }}>
            <img
              src={data.imageUrl}
              alt="Testimonial"
              className="position-absolute"
              style={{ zIndex: 1 }}
            />
            <img
              src={TestimonialAccent}
              alt="testimonial Frame"
              className="position-absolute"
              style={{ margin: "-30px 0 0 -30px" }}
            />
          </div>
        </div>
        <div className="col" style={{ marginBottom: 40 }}>
          <h4 style={{ marginBottom: 40 }} className="font-weight-bold">
            {data.name}
          </h4>
          <Star value={data.rate} width={35} height={35} spacing={4} />
          <h5 className="h2 font-weight-light my-3">{data.content}</h5>
          <span className="text-gray-500">
            {data.familyName}, {data.familyOccupation}
          </span>

          <div className="">
            <Button
              className="btn px-5"
              style={{ marginTop: 40 }}
              hasShadow
              isPrimary
              type="link"
              href={`/testimonial/${data._id}`}
            >
              Read Their Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
