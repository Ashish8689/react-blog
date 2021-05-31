import React from 'react';
import './App.css';
import './custom.css';
import AddBlog from './Components/Blogs/AddBlog';
import BlogList from './Components/Blogs/BlogList';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">

        <Router>
            <Navbar/>

              <Switch>
                 <Route exact path="/" component={BlogList} ></Route>
                  <Route exact path="/about" component={About} ></Route>
                  <Route exact path="/Addblog" component={AddBlog} ></Route>
                </Switch>   
        </Router>
        <Footer/>
        {/* <AddBlog/> */}
    </div>
  );
}

export default App;
