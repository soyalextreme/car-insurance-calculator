import React, { useState } from "react";
import Header from "./componets/Header";
import styled from "@emotion/styled";
import Form from "./componets/Form";
import Summary from "./componets/Summary";
import Result from "./componets/Result";
import Spinner from "./componets/spinner/Spinner";

const HeaderContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;

function App() {
  const [sumary, setSummary] = useState({
    quoteResult: 0,
    data: {
      brand: "",
      year: "",
      plan: ""
    }
  });
  const [loading, setLoading] = useState(false);

  const { quoteResult, data } = sumary;
  return (
    <>
      <HeaderContainer>
        <Header title="Car Insurance Quote" />
        <FormContainer>
          <Form setSummary={setSummary} setLoading={setLoading} />
          {loading ? <Spinner /> : null}
          <Summary data={data} loading={loading} />
          {loading ? null : <Result quoteResult={quoteResult} />}
        </FormContainer>
      </HeaderContainer>
    </>
  );
}

export default App;
