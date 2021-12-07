import Welcome from "./Screens/Welcome/Welcome";
import Home from "./Screens/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Home/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
