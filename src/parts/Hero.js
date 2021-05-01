import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/images/icons/icon-cities.svg";
import IconTravelers from "assets/images/icons/icon-travelers.svg";
import IconTreasure from "assets/images/icons/icon-treasure.svg";

import Button from "elements/Button";

const Hero = (props) => {
  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  };

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: "520px" }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget the Work and Get Your Holiday
          </h1>
          <p
            className="mb-4 font-weight-light text-gray-500 w-75"
            style={{ lineHeight: "170%" }}
          >
            Forget the work and get your holiday Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Ut voluptatem esse sequi est
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me now
          </Button>

          <div className="row" style={{ marginTop: "80px" }}>
            <div className="col-auto" style={{ marginRight: "35px" }}>
              <img
                width="36"
                height="36"
                src={IconTravelers}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {props.data.travelers.toLocaleString()}{" "}
                <span className="text-gray-500 font-weight-light">
                  Travelers
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: "35px" }}>
              <img
                width="36"
                height="36"
                src={IconTreasure}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {props.data.treasure.toLocaleString()}{" "}
                <span className="text-gray-500 font-weight-light">
                  Treasure
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={IconCities}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {props.data.beautyCities.toLocaleString()}{" "}
                <span className="text-gray-500 font-weight-light">Cities</span>
              </h6>
            </div>
          </div>
        </div>

        {/* image section */}
        <div className="col-6 pl-5">
          <div className="image-hero" style={{ width: 520, height: 410 }}>
            <img
              src={ImageHero}
              alt="Room with couches"
              className="img-fluid position-absolute"
              style={{ margin: "-50px 0 0 -30px", zIndex: "1" }}
            />
            <img
              src={ImageHero_}
              alt="Room with couches frame"
              className="img-fluid position-absolute"
              style={{ margin: "-20px -15px -15px 0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
