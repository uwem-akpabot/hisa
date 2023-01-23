import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PrivateRoutes from './utils/PrivateRoutes';
// import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
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
  )
}

export default App;
