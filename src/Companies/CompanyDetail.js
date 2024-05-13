import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api.js";
import JobCardList from "../Jobs/JobCardList.js";


/** Company Detail page.
 *
 * Renders information about company, along with the jobs at that company.
 *
 * Routed at /companies/:handle
 *
 * Routes -> CompanyDetail -> JobCardList
 */

function CompanyDetail() {
  const [companyData, setCompanyData] = useState({
    data: null,
    isLoading: true,
  });
  console.log("In CompanyDetails", "State:", companyData);

  const params = useParams();
  console.log("params = ", params);

  useEffect(
    function fetchCompanyDetailsWhenMounted() {
      async function CompanyDetails() {
        let companyResult = await JoblyApi.getCompanies(params.name);
        setCompanyData({
          data: companyResult,
          isLoading: false,
        });
      }
      CompanyDetails();
    },
    [params]
  );


  if (companyData.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <div className="CompanyDetails">
        <h2 className="display-2">{companyData.data.name}</h2>
        <h3 className="lead">{companyData.data.description}</h3>
      </div>
      <JobCardList params={params} jobs={companyData.data.jobs} />
  
    </div>
  );
}

export default CompanyDetail;


