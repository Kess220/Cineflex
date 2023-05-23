import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SessionsPage from "../pages/SessionsPage/SessionsPage";
import HomePage from "../pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sessoes/:movieId" element={<SessionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
