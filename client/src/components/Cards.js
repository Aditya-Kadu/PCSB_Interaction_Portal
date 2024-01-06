// Import necessary modules
import React, { Component } from "react";
import avatar from "../images/avatar.jpeg";
import FullProfileView from "./Edit";
import { individuals } from "./Search";

var clickedIndividual;

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFullProfile: false,
      selectedIndividual: null,
    };
  }

  handleViewProfileClick = (individual) => {
    this.setState({ showFullProfile: true, selectedIndividual: individual });
    clickedIndividual = individual;
  };

  handleCloseProfile = () => {
    this.setState({ showFullProfile: false, selectedIndividual: null });
  };

  render() {
    const { showFullProfile, selectedIndividual } = this.state;

    const indi = individuals;
    console.log(indi);
    console.log(individuals);

    // Array of data for multiple individuals
    // const individuals = [
    //   {
    //     name: "Naman Labhsetwar",
    //     email: "labhsetwarnaman@gmail.com",
    //     domain: "Machine Learning",
    //     role: "Core Member",
    //   },
    //   {
    //     name: "Vaishnavi Sawant",
    //     email: "vaishnavi@gmail.com",
    //     domain: "Web development",
    //     role: "Core Member",
    //   },
    //   {
    //     name: "Aditya Kadu",
    //     email: "aditya@gmail.com",
    //     domain: "Machine Learning",
    //     role: "Core Member",
    //   },
    //   {
    //     name: "Naman Labhsetwar",
    //     email: "labhsetwarnaman@gmail.com",
    //     domain: "Machine Learning",
    //     role: "Core Member",
    //   },
    //   {
    //     name: "Vaishnavi Sawant",
    //     email: "vaishnavi@gmail.com",
    //     domain: "Web development",
    //     role: "Core Member",
    //   },
    //   {
    //     name: "Aditya Kadu",
    //     email: "aditya@gmail.com",
    //     domain: "Machine Learning",
    //     role: "Core Member",
    //   },
    //   // Add more individuals as needed
    // ];

    if (showFullProfile) {
      return (
        <FullProfileView
          individual={selectedIndividual}
          onClose={this.handleCloseProfile}
        />
      );
    }

    return (
      <div className="container mb-5" style={{ marginTop: "50px" }}>
        <div className="row justify-content-center mb-5">
          {indi.map((individual, index) => (
            <div key={indi._id} className="col-md-3 mb-5">
              {/* Wrap the card content in a clickable element */}
              <div
                className="card card-hover"
                onClick={() => this.handleViewProfileClick(individual)}
                style={{ cursor: "pointer", transition: "transform 0.3s" }}
              >
                <img className="avatar" src={avatar} alt="logo" />
                <div className="card-body">
                  <h5 className="card-title">{individual.name}</h5>
                  <p className="card-subtitle mb-2 text-muted">
                    Email: {individual.email}
                  </p>
                  <p className="card-subtitle mb-2 text-muted">
                    Domain: {individual.domain}
                  </p>
                  <p className="card-subtitle mb-2 text-muted">
                    Role: {individual.role}
                  </p>
                  <p className="card-text"></p>
                  {/* You can remove the button */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export { clickedIndividual };
