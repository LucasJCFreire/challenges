import Header from "./layout/Header";
import Container from "./layout/Container";
import Home from "./pages/Home";
import Description from "./pages/Description";
import Footer from "./layout/Footer";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/description/:id" element={<Description />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}
export default App;
