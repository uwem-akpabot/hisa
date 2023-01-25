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
import Frontpage from "./pages/Frontpage";
import Doctor from "./pages/Doctor";
import useToken from './components/useToken';

function App() {
  const { token, removeToken, setToken } = useToken(); 

  return (
    <>
    <BrowserRouter>
      {/* <AuthProvider> */}
        <Routes>
          <Route exact path="/" element={<Frontpage />} />
          <Route path="/home" element={<Home />} />

          <Header token={removeToken}/>
          {!token && token!=="" &&token!== undefined?  
          <Login setToken={setToken} />
          :(
            <>
              <Routes>
                <Route exact path="/profile" element={<Profile token={token} setToken={setToken}/>}></Route>
              </Routes>
            </>
          )}

          <Route path="login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="*" element={<main style={{ padding: "1rem" }}>
            <h3>Error 404! Page doesn't exist</h3><p>Oops! You landed on a page that does not exist</p></main>}
          />
          
          {/* <Route element={<PrivateRoutes />}> */}
            {/* <Route exact path="/" element={<Home caption={caption} />} /> */}
            {/* <Route path="/" element={<OtherPage />} /> */}
          {/* </Route> */}
        </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
    </>
  )
}

export default App;
