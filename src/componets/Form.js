import React, { useState } from "react";
import PropTypes from "prop-types";

import styled from "@emotion/styled";
import { getDiferenceYear, brandOperation, getPlan } from "../helper";

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 1s ease;
  margin-top: 2rem;

  &:hover {
    cursor: pointer;
    background-color: #26c6da;
  }
`;

const ErrorMessage = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 90%;
  text-align: center;
  opacity: 0.6;
  margin-top: 2rem;
`;

const Form = ({ setSummary, setLoading }) => {
  //state
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: ""
  });

  // extract values
  const { brand, year, plan } = data;

  //leer los datos y colocarlos en el state
  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if ((brand.trim() === "", year.trim() === "", plan.trim() === "")) {
      setError(true);
      return;
    }
    setError(false);

    //diferencia de anio
    let basePrice = 2000;
    const diference = getDiferenceYear(year);
    basePrice -= (diference * 3 * basePrice) / 100;

    // en base a la marca
    basePrice = brandOperation(brand) * basePrice;
    const increment = getPlan(plan);
    // multiplicando el incremento del plan
    basePrice *= increment;
    // redondeado
    basePrice = parseFloat(basePrice).toFixed(2);

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSummary({
        quoteResult: parseInt(basePrice),
        data
      });
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Field>
        <Label>Brand</Label>
        <Select name="brand" value={brand} onChange={handleChange}>
          <option value="">--- Pick one ---</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asian">Asian</option>
        </Select>
      </Field>
      <Field>
        <Label>Year</Label>
        <Select name="year" value={year} onChange={handleChange}>
          <option value="">--- Pick one ---</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>
      <Field>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basic"
          checked={plan === "basic"}
          onChange={handleChange}
        />
        Basic
        <InputRadio
          type="radio"
          name="plan"
          value="complete"
          checked={plan === "complete"}
          onChange={handleChange}
        />
        Complete
      </Field>
      <Button type="submit">Calculate Quote</Button>
      {error ? <ErrorMessage>Ups! missing fields</ErrorMessage> : null}
    </form>
  );
};

Form.propTypes = {
  setSummary: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired
};

export default Form;
