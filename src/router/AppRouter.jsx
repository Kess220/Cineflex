import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import HomePage from "../pages/HomePage/HomePage";
import SessionsPage from "../pages/SessionsPage/SessionsPage";
import SeatsPage from "../pages/SeatsPage/SeatsPage";
import SuccessPage from "../pages/SuccessPage/SuccessPage";

const AppRouter = () => {
  return (
    <>
      <NavContainer>CINEFLEX</NavContainer>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sessoes/:movieId" element={<SessionsPage />} />
          <Route path="/assentos/:showtimeId" element={<SeatsPage />} />
          <Route path="/sucesso" element={<SuccessPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;

const NavContainer = styled.div`
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
