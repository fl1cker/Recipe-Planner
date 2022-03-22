import './App.css';

import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/recipe-week">Recipe Week</Link>
        <Link to="/recipe-manager">Manage Recipes</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
