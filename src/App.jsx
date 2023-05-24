import styled from "styled-components";
import HomePage from "./pages/HomePage/HomePage";
// import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
// import SuccessPage from "./pages/SuccessPage/SuccessPage";

export default function App() {
  return (
    <>
      <StyledNavContainer>CINEFLEX</StyledNavContainer>

      <HomePage />
      {/* <SeatsPage /> */}
      {<SessionsPage />}
      {/* <SuccessPage /> */}
    </>
  );
}

const StyledNavContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c3cfd9;
  color: #e8833a;
  font-family: "Roboto", sans-serif;
  font-size: 34px;
  position: fixed;
  top: 0;
  a {
    text-decoration: none;
    color: #e8833a;
  }
`;
