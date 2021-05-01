import React, { Component } from "react";
import Header from "parts/Header";

import landingPage from "json/LandingPage.json";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
      </>
    );
  }
}

export default LandingPage;
