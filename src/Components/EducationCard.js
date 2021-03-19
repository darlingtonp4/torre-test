import React from "react";
import "./JobCard.css";
const EducationCard = ({ study }) => {
  return (
    <div className="jobcard-container">
      <h3>{study.name}</h3>
      <div>
        {" "}
        <h5>{study.organizations[0].name}</h5>
        <h4>
          {study.fromMonth}, {study.fromYear} - {study.toMonth}, {study.toYear}
        </h4>
      </div>
    </div>
  );
};

export default EducationCard;
