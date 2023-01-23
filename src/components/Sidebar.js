import { Outlet, Link } from 'react-router-dom';

const Sidebar = () => {
    let {user, logoutUser} = '';
  return (
    <nav id="sidebar" className="sidebar js-sidebar">
        <div className="sidebar-content js-simplebar">
            <a className="sidebar-brand" href="index.html">
            <span className="align-middle">Beyond <br />Healthcare</span>
            </a>

            <ul className="sidebar-nav">
                <li className="sidebar-header">
                    Pages
                </li>

                <li className="sidebar-item active">
                <Link to="/" className="sidebar-link" href="charts-chartjs.html">
            <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">
                Dashboard</span></Link>
        
                </li>
            </ul>
            
            
            <ul className="sidebar-nav">
                <li className="sidebar-header">
                    Users
                </li>

                <li className="sidebar-item">
                <Link to="/admin" className="sidebar-link" href="charts-chartjs.html">
            <i className="align-middle" data-feather="user"></i> <span className="align-middle">
            Administrator</span></Link>
                </li>

                <li className="sidebar-item">
                <Link to="/consulting" className="sidebar-link" href="charts-chartjs.html">
            <i className="align-middle" data-feather="log-in"></i> <span className="align-middle">
             Consulting </span></Link>
                </li>

                <li className="sidebar-item">
                <Link to="/laboratory" className="sidebar-link" href="charts-chartjs.html">
            <i className="align-middle" data-feather="user-plus"></i> <span className="align-middle">
            Laboratory</span></Link>
                </li>

                <li className="sidebar-item">
                <Link to="/pharmacy" className="sidebar-link" href="charts-chartjs.html">
            <i className="align-middle" data-feather="home"></i> <span className="align-middle">
            Pharmacy</span></Link>
                </li>
                <li className="sidebar-item">
                <Link to="/nursing" className="sidebar-link" href="charts-chartjs.html">
            <i className="align-middle" data-feather="book"></i> <span className="align-middle">
            Nursing</span></Link>
                </li>

                <li className="sidebar-header">
                    Extra Tools
                </li>

                <li className="sidebar-item">
                <Link to="/login" className="sidebar-link" href="charts-chartjs.html">
            <i className="align-middle" data-feather="bar-chart-2"></i> <span className="align-middle">
            Login</span></Link>
        
                </li>
                <li className="sidebar-item">
                <Link to="/register" className="sidebar-link" href="charts-chartjs.html">
            <i className="align-middle" data-feather="bar-chart-2"></i> <span className="align-middle">
            Register</span></Link>
        
                </li>
                <li className="sidebar-item">
                <Link to="/appointment" className="sidebar-link" href="charts-chartjs.html">
            <i className="align-middle" data-feather="bar-chart-2"></i> <span className="align-middle">
            Appointment</span></Link>
                </li>

            </ul>

            <div className="sidebar-cta">
                <div className="sidebar-cta-content">
                    <div className="d-grid">
                        <Link to="/patients" className="btn btn-primary">Patients' Portal</Link>
                    </div>
                </div>
            </div>
        </div>
        <Outlet />
    </nav>
  )
}

export default Sidebar
