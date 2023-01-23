import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PrivateRoutes from './utils/PrivateRoutes';
// import { AuthProvider } from './context/AuthContext';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Laboratory from './pages/Laboratory';
import Consulting from './pages/Consulting';
import Pharmacy from './pages/Pharmacy';
import Nursing from './pages/Nursing';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      {/* <AuthProvider> */}
      
        <div className="wrapper">
          <Sidebar />
          <div className="main">
            <Nav />

            <main className="content pt-2">
            <div className="container-fluid p-0 ">
              <h1 className="display-4 py-3"><strong><span class="text-warning">Beyond</span> <span class="text-primary">Healthcare</span></strong></h1> 
        
              <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route exact path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/laboratory" element={<Laboratory />} />
                <Route path="/pharmacy" element={<Pharmacy />} />
                <Route path="/consulting" element={<Consulting />} />
                <Route path="/nursing" element={<Nursing />} />                
                <Route path="*" element={<main style={{ padding: "1rem" }}>
                  <h3>Error 404! Page doesn't exist</h3><p>Oops! You landed on a page that does not exist</p></main>}
                />
                
                {/* <Route element={<PrivateRoutes />}> */}
                  {/* <Route exact path="/" element={<Home caption={caption} />} /> */}
                  {/* <Route path="/" element={<OtherPage />} /> */}
                {/* </Route> */}
              </Routes>

            </div>
          </main>

          <Footer />
        </div>
      </div>
      {/* </AuthProvider> */}
    </BrowserRouter>
    </>
  )
}

export default App;
