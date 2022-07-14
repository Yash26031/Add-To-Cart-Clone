import { Route, Routes } from "react-router";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
