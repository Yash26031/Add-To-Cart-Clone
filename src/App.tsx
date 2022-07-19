import { Navigate, Route, Routes } from "react-router";
import HomePage from "./components/HomePage";
import MenuItemCard from "./components/MenuItemCard";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="home/item/:id" element={<MenuItemCard />} />
      </Routes>
    </>
  );
}

export default App;
