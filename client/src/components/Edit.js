// ProfileView.js

import React from "react";
import { FaArrowLeft } from "react-icons/fa"; // Import an arrow icon from a library like react-icons
import "../styles/Edit.css"; // Import your CSS file
import { clickedIndividual } from "./Cards";
// import git from './git.png';
// import linkedin from './linkedin.jpg';
//import { Link } from 'react-router-dom';

const ProfileView = ({ onClose }) => {
  // Dummy data for demonstration
  const profileData = {
    name: clickedIndividual.name,
    email: clickedIndividual.email,
    branch: clickedIndividual.branch,
    phoneNumber: clickedIndividual.phone,
    year: clickedIndividual.year,
    linkedIn: clickedIndividual.linkedIn,
    github: clickedIndividual.github,
    Additionallinks: clickedIndividual.additionalLinks,
    // Domain: "Web development,App development",
    Expertise: clickedIndividual.expertise,
    // Add more attributes as needed
  };

  //   multipart/form-data

  // {
  //   "name": "Name", // Required
  //   "email": "email", // Required
  //   "password": "12345678", // Required
  //   "description": "Description of the member",
  //   "phone": "Phone Number",
  //   "github": "Github URL",
  //   "additionalLinks": {
  //     "Link for": "Link URL",
  //     "Portfolio": "Portfolio URL"
  //   },
  //   "expertise": {
  //     "Domain": ["Expertise 1", "Expertise 2"],
  //     "Web Development": ["MERN", "Flask"],
  //     "App Development": ["Flutter"]
  //   }
  // }

  // + image: File

  return (
    <div className="wrapper">
      <div className="arrow-container" onClick={onClose}>
        <FaArrowLeft
          className="arrow-icon"
          style={{ fontSize: "24px", cursor: "pointer", marginLeft: "30px" }}
        />
      </div>
      <div className="flex-container">
        {/* Profile Container */}
        <div className="other-container">
          {/* Add content for the other container here */}
          <div className="profile-image-box">
            {/* Add an image tag with the profile image source */}
            <img
              src="https://placekitten.com/100/100" // Replace with your actual image source
              alt="Profile"
              className="profile-image"
            />
          </div>
          <div className="profile-attribute-left">
            <strong></strong> {profileData.name}
          </div>
          <div className="profile-attribute-left1">
            <strong></strong> {profileData.email}
          </div>
          {/* Add more profile attributes here */}
        </div>
        <div className="profile-container">
          <h1>Profile</h1>
          <div className="profile-details">
            <div className="profile-attribute">
              <strong>Branch:</strong> {profileData.branch}
            </div>
            <div className="profile-attribute">
              <strong>Phone Number:</strong> {profileData.phoneNumber}
            </div>
            <div className="profile-attribute">
              <strong>Academic Year:</strong> {profileData.year}
            </div>
            <div className="profile-attribute">
              <strong>LinkedIn:</strong> {profileData.linkedIn}
            </div>
            <div className="profile-attribute">
              <strong>Github:</strong> {profileData.github}
            </div>
            <div className="profile-attribute">
              <strong>Addtional Links:</strong> {profileData.Additionallinks}
            </div>
            <div className="profile-attribute">
              <strong>Domain:</strong> {profileData.Domain}
            </div>
            <div className="profile-attribute">
              <strong>Expertise:</strong> {profileData.Expertise}
            </div>
            {/* Add more profile attributes here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
