import React from "react";
import styled from "styled-components";

import * as theme from "../shared/theme";
import { Container } from "../shared/grid";
import Card from "../shared/ContentCard";
import { Button } from "../shared/elements";
import isValid from "../../utils/validateCityIdInfo";
import SuccessIcon from "../../images/congratulations.svg";

class ClaimReceived extends React.Component {
  componentDidMount() {
    if(!this.props.isLoggedIn) {
      this.props.redirectToDiplomaHome();
    }
  }
  render() {
    const { data, redirectToHome } = this.props;
    if(!this.props.isLoggedIn)
      return null;
    return (<Wrapper>
      <Card>
        <h2>Congratulations!</h2>
        <p>You received your Diploma claims.
          Your claims are stored in your uPort app.</p>

        <SuccessImage src={SuccessIcon} />
        <hr />
        <h4>More than Diploma...</h4>
        <p>
          With your Diploma claims you gained an easy and quick access to
          numerous services and programs in Cleverland.
        </p>
        <Button secondary onClick={this.props.redirectToHome}>Back to Home</Button>
      </Card>
    </Wrapper>)
  }
}

const Wrapper = styled.div`
  ul {
    list-style: disc;
    margin-left: 20px;
    li + li {
      margin-top: 15px;
    }
  }
`;
const SuccessImage = styled.img`
  display: block;
  margin: 40px auto 0;
`;

export default ClaimReceived;