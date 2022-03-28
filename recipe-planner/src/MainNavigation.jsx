import { Link } from 'react-router-dom';
import './MainNavigation.css';

function MainNavigation() {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li>
          <Link to="/">
            <img
              className="home-link"
              src="HoneyDew.jpeg"
              alt="Home Link"
            ></img>
          </Link>
        </li>
        <li>
          <Link to="/recipe-week">Recipe Week</Link>
        </li>
        <li>
          <Link to="/recipe-manager">Manage Recipes</Link>
        </li>
        <li>
          <Link to="/test-page">Test Page</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
