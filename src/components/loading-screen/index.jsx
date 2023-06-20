import Logo from "@components/logo";
import styled, { keyframes } from "styled-components";
import headerData from "../../data/header.json";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingScreenContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    z-index: 9999;
`;

const LoadingAnimation = styled.div`
    width: 50px;
    height: 50px;
    border: 4px solid #ccc;
    border-top-color: #333;
    border-radius: 50%;
    animation: ${spinAnimation} 1s infinite linear;
`;

const LoadingScreen = () => {
    return (
        <LoadingScreenContainer>
            <LoadingAnimation />
            <Logo logo={headerData.logo} />
        </LoadingScreenContainer>
    );
};

export default LoadingScreen;
