import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar'
import News from './components/News'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={
              <>
              <Navbar page="home" key="home"/>
              <News key="general" apiKey={process.env.REACT_APP_NEWS_API_KEY} category="general"/>
              </>
            }/>
            <Route exact path="/business" element={
              <>
              <Navbar page="bs" key="bs"/>
              <News key="business" apiKey={process.env.REACT_APP_NEWS_API_KEY} category="business"/>
              </>
            }/>
            <Route exact path="/entertainment" element={
              <>
              <Navbar page="en" key="en"/>
              <News key="entertainment" apiKey={process.env.REACT_APP_NEWS_API_KEY} category="entertainment"/>
              </>
            }/>
            <Route exact path="/health" element={
              <>
              <Navbar page="ht" key="ht"/>
              <News key="health" apiKey={process.env.REACT_APP_NEWS_API_KEY} category="health"/>
              </>
            }/>
            <Route exact path="/science" element={
              <>
              <Navbar page="sc" key="sc"/>
              <News key="science" apiKey={process.env.REACT_APP_NEWS_API_KEY} category="science"/>
              </>
            }/>
            <Route exact path="/sports" element={
              <>
              <Navbar page="sp" key="sp"/>
              <News key="sports" apiKey={process.env.REACT_APP_NEWS_API_KEY} category="sports"/>
              </>
            }/>
            <Route exact path="/technology" element={
              <>
              <Navbar page="tc" key="tc"/>
              <News key="technology" apiKey={process.env.REACT_APP_NEWS_API_KEY} category="technology"/>
              </>
            }/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
