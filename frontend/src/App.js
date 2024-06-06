import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import ProductDetails from './components/ProductDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Categories />
      <MainContent />
      <ProductDetails />
      <Footer />
    </div>
  );
}

export default App;
