import React from "react";
import PropTypes from "prop-types";

import styled from "@emotion/styled";

const TextHeader = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: "Slabo 27px", serif;
  text-align: center;
`;

const HeaderContainer = styled.header`
  background-color: #26c6da;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
`;

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <TextHeader>{title}</TextHeader>
    </HeaderContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
