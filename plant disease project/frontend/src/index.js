import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

import { Router } from 'react-router-dom';
import Genlogin from './components/Genlogin';

import PlantDetail from './components/PlantDetail';
import Signup from './components/Signup';
import Afterlogin from './components/Afterlogin';
import PredictDisease from './components/PredictDisease';
import Planthealth from './components/Planthealth';
import ViewTweets from './components/ViewTweets';
import NavPostTweets from './components/NavPostTweets';
import ResSignup from './components/ResSignup';
import ResAfterlogin from './components/ResAfterlogin';
import PostTweets from './components/PostTweets';
import ViewMyTweets from './components/ViewMyTweets';
import Updateplantdetail from './components/Updateplantdetail';
import Contact from './components/Contact';
import Reslogin from './components/Reslogin';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
        <Route index element={<Home />} />
          
<Route path="about" element={<About/>}/>
<Route path="genlogin" element={<Genlogin/>}/>
<Route path="plantdetails" element={<PlantDetail/>}/>
<Route path="signup" element={<Signup/>}/>
<Route path="afterlogin" element={<Afterlogin/>}/>
<Route path="predictdisease" element={<PredictDisease/>}/>
<Route path="planthealth" element={<Planthealth/>}/>
<Route path="viewtweet" element={<ViewTweets/>}/>
<Route path="reslogin" element={<Reslogin/>}/>
<Route path="ressignup" element={<ResSignup/>}/>
<Route path="resafterlogin" element={<ResAfterlogin/>}/>
<Route path="posttweet" element={<PostTweets/>}/>
<Route path="mytweets" element={<ViewMyTweets/>}/>
<Route path="updateplatedetail" element={<Updateplantdetail/>}/>
<Route path="contact" element={<Contact/>}/>









        </Route>

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);