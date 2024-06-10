import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import ProductPage from "./components/ProductDetail";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainContent from "./components/MainContent";
import ProductDetail from "./components/ProductDetail";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SearchBar />
        <Categories />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
