import React from "react";
import "./JobCard.css";
const JobCard = ({ job }) => {
  return (
    <div className="jobcard-container">
      <h3>{job.name}</h3>
      <div>
        {" "}
        <h5>{job.organizations[0].name}</h5>
        <h4>
          {job.fromMonth}, {job.fromYear} - {job.toMonth}, {job.toYear}
        </h4>
      </div>
    </div>
  );
};

export default JobCard;
