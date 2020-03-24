import React from "react";
import PropTypes from "prop-types";

import styled from "@emotion/styled";
import { firstMayus } from "../helper";

const ContainerSummary = styled.div`
  padding: 1rem;
  background-color: #00838f;
  text-align: center;
  color: #fff;
  margin-top: 1rem;
`;

const Summary = ({ data, loading }) => {
  const { year, brand, plan } = data;
  // validation of data
  if (
    year.trim() === "" ||
    plan.trim() === "" ||
    brand.trim() === "" ||
    loading
  )
    return null;

  return (
    <ContainerSummary>
      <h2>Summary</h2>
      <ul>
        <li>Brand: {firstMayus(brand)}</li>
        <li>Plan: {firstMayus(plan)}</li>
        <li>Year: {year}</li>
      </ul>
    </ContainerSummary>
  );
};

Summary.propTypes = {
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Summary;
