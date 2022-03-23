import './HeaderBar.css';
import MainNavigation from './MainNavigation';

function HeaderBar() {
  return (
    <div className="header-bar">
      <div className="header-bar-nav">
        <MainNavigation />
      </div>
      <div className="title">Honey Dew</div>
      <div className="empty"></div>
    </div>
  );
}

export default HeaderBar;
