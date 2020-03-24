import React from "react";
import PropTypes from "prop-types";

import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const MessageResult = styled.p`
  color: #00838f;
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const ContainerResult = styled.div`
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin: 1rem;
  position: relative;
`;

const Result = ({ quoteResult }) => {
  if (!quoteResult)
    return <Message>Select brand, year and type of insurance</Message>;

  return (
    <>
      <ContainerResult>
        <TransitionGroup component="span" className="resultado">
          <CSSTransition
            classNames="resultado"
            key={quoteResult}
            timeout={{ enter: 500, exit: 500 }}
          >
            <MessageResult>
              <span>Price: $ {quoteResult}</span>
            </MessageResult>
          </CSSTransition>
        </TransitionGroup>
      </ContainerResult>
    </>
  );
};

Result.propTypes = {
  quoteResult: PropTypes.number.isRequired
};

export default Result;
