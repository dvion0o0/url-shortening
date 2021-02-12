import React from "react";
import ServiceCard from "./serviceCard";
import Brand from "../assets/icon-brand-recognition.svg";
import Record from "../assets/icon-detailed-records.svg";
import Fully from "../assets/icon-fully-customizable.svg";

const services = () => {
  return (
    <section className="services">
      <div className="services-center">
        <h1> Advanced Statistics </h1>
        <p>
          Track how your links are performomg across the web with our advanced
          statistics dashboard
        </p>
        <div className="cards">
          <ServiceCard
            img={Brand}
            title="Brand Recognition"
            info="Boost your brand recognition with each click. Generic links don't mean
        a thing. Branded links help instil confidence in your content"
          />
          <ServiceCard
            img={Record}
            title="Details Records"
            info="Gain insights into who is clicking your links. Knowing when and 
         where people engage with your content helps inform better decisions."
          />
          <ServiceCard
            img={Fully}
            title="Fully Customizable"
            info="Improve brand awareness and content discoverability through customizable links,
        supercharging audience enagagement."
          />
        </div>
      </div>
    </section>
  );
};

export default services;
