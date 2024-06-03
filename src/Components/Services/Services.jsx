import React, { Component } from "react";

// imports react-icons
import { FaCocktail, FaShuttleVan, FaBeer, FaSwimmer } from "react-icons/fa";

// imports components
import Title from "../Title/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "Unwind with complimentary cocktails at our hotel. Cheers to a memorable stay!",
      },
      {
        icon: <FaSwimmer />,
        title: "Swimming",
        info: "Dive into relaxation at our hotel's poolside oasis. Enjoy a refreshing escape and unwind in style.",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle ",
        info: "Our hotel offers a free shuttle to transport guests to the airport and nearby locations. The shuttle runs every 30 minutes during peak hours.",
      },
      {
        icon: <FaBeer />,
        title: "storages beer",
        info: "We offer a secure, climate-controlled storage area to keep your beer cold and fresh during your stay.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
