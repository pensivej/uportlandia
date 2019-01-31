import React from "react";
import styled from "styled-components";

import * as theme from "../shared/theme";
import { Container } from "../shared/grid";
import Card from "../shared/ContentCard";
import { Button } from "../shared/elements";
import LoginModal from "../uport/LoginContainer";
import UniLogo from "../../images/diploma-icon.svg";
import isValid from "../../utils/validateCityIdInfo";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModal: false
    };
  }
  hideLoginModal = () => {
    this.setState({ loginModal: false });
  }
  showLoginModal = () => {
    this.setState({ loginModal: true });
  }
  handleLoginSuccess = profile => {
    const { loginModal } = this.state;
    if(loginModal) {
      this.setState({ loginModal: false })
      const receivedClaim = profile["Cleverland City ID"];
      if(isValid(receivedClaim).valid) {
        this.props.redirectToReceiveDiploma();
      } else {
        this.props.redirectToDiplomaRequirement();
      }
    }
  }
  render() {
    const { profile, redirectToCityIdForm } = this.props;
    const { loginModal } = this.state;
    return (<Wrapper>
      <Card>
        <h2>Get a digital verification of your diploma</h2>
        <ul>
          <li>Share your educational information easily in your job interview
            or when you apply to a post-graduate program.</li>
          <li>Get discounts or free access to services and programs all
            around the world.</li>
        </ul>
        <Box>
          <h3>Get your Diploma claims in 3 easy steps:</h3>
          <ol>
            <li>Login with uPort</li>
            <li>Share your information: last name, first name and date of
              birth</li>
            <li>Receive your Diploma claims!</li>
          </ol>
        </Box>
        <Button className="long" secondary onClick={this.showLoginModal}>
          Share Your Information
        </Button>
      </Card>
      <LoginModal
        show={loginModal}
        heading="First things first"
        description="To login scan the QR code with  the uPort app."
        infoHeading="You're logging in to"
        issuer={{
          heading: "Diploma",
          subHeading: "The university of Cleverland",
          name: "The university of Cleverland",
          logo: UniLogo
        }}
        requestedClaims={[{
          name: "Cleverland City ID",
          request: true,
          hidden: true
        }, {
          name: "First Name",
          request: true
        }, {
          name: "Last Name",
          request: true
        }, {
          name: "Date of Birth",
          request: true
        }]}
        onClose={this.hideLoginModal}
        onLoginSuccess={this.handleLoginSuccess} />
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
const Box = styled.div`
  background-color: ${theme.colors.lightBg};
  margin-top: 36px;
  padding: 20px;

  h3 {
    font-weight: 600;
    margin-bottom: 22px;
  }
  ol {
    list-style-type: decimal;
    margin-left: 20px;

    li + li {
      margin-top: 22px;
    }
  }
`;

export default Landing;
