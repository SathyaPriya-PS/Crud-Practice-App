import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <nav className="sidebar">
        <ul className="nav-list">
          <li><Link to="add">Add Products</Link></li>
          <li><Link to="view">View Products</Link></li>
        </ul>
      </nav>

      {/* Content Area */}
      <div className="content-area">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
