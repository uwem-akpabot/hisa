import React, { useState, useEffect } from 'react';
import Sidebar from './../components/Sidebar';
import Footer from './../components/Footer';
import GetArticles from './../components/GetArticles';
import Nav from '../components/Nav';
import Dashboard from '../components/Dashboard';

const Home = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:5000/get', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(error => console.log(error))
  }, [])

  return (
    <>
     <div className="wrapper">
		<Sidebar />
		<div className="main">
        	<Nav />
            <Dashboard />
            <Footer />
        </div>
     </div>

     {/* <GetArticles articles={articles} /> */}
    </>
  );
}

export default Home