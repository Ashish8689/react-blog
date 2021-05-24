import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import BlogList from './Components/Blogs/BlogList';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <BlogList/>
        <Footer/>
    </div>
  );
}

export default App;
