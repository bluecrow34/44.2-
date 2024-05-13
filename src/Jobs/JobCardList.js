import React from "react";
import JobCard from "../Jobs/JobCard";

/** Show list of job cards.
 *
 * Used by both JobList and CompanyDetail to list jobs. Receives an apply
 * func prop which will be called by JobCard on apply.
 *
 * JobList -> JobCardList -> JobCard
 * CompanyDetail -> JobCardList -> JobCard
 *
 */

function JobCardList({ jobs }) {
  console.debug("JobCardList", "jobs=", jobs);

  return (
      <div className="JobCardList">
        {jobs?.map((job) => (
            <JobCard
                id={job.id}
                title={job.title}
                salary={job.salary}
                companyName={job.companyName}
            />
        ))}
      </div>
  );
}

export default JobCardList;