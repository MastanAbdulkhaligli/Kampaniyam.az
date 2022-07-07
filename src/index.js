import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Favourites from "./Pages/Favourites/Favourites";
import FilteredProducts from "./Pages/FilteredProducts/FilteredProducts";
import Pricing from "./Pages/Pricing/Pricing";
import OwnerPage from "./Pages/OwnerPage/OwnerPage";
import SignOut from "./Pages/SignOut/SignOut";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import AllOwners from "./Pages/AllOwners/AllOwners";
// import Register from "./Pages/Register/Register";
import SignIn from "./Pages/SignIn/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Announcement from "./Components/Announcement/Announcement";
import Categories from "./Components/Categories/Categories";
import Footer from "./Components/Footer/Footer";
import Error from "./Pages/Error/Error";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import { store, persistor } from "./App/store";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Announcement />
        <Navbar />
        <Categories />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Home />} />
          <Route path="product/:productId" element={<SingleProduct />} />
          <Route path="company/:ownerName" element={<OwnerPage />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="category/:categoryName" element={<FilteredProducts />} />
          {/* <Route path="/:productId" element={<SingleProduct />} /> */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/elansahibleri" element={<AllOwners />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </PersistGate>
  </Provider>
);
