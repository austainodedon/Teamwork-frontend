import React from "react";

const TLanding = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Teamwork</h1>
          <p className="lead">
            Teamwork is a social network that enables the staff of an
            organisation to bond well and interact in a better way
          </p>
          <div className="buttons">
            <a href="#register">Register</a>
            ||
            <a href="#login">Login</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TLanding;
