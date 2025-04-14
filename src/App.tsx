import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ProductPage from "./components/ProductPage";
import TopSellers from "./components/TopSellers";
import PopularBlogs from "./components/PopularBlogs";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <SideBar />
        <div className="rounded w-full flex justify-center flex-wrap">
          <Routes>
            <Route path="/" element={<MainContent />}></Route>
            <Route path="/product/:id" element={<ProductPage />}></Route>
          </Routes>
        </div>
        <div>
          <TopSellers />
          <PopularBlogs />
        </div>
      </div>
    </Router>
  );
}

export default App;
