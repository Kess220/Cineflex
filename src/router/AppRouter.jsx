import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SessionsPage from "../pages/SessionsPage/SessionsPage";
import App from "../App";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sessoes/:movieId" element={<SessionsPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
