import "./navbar.css"
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Person } from "../../assets/icons/person.svg";
import { ReactComponent as Noti } from "../../assets/icons/noti.svg";
import { ReactComponent as Chat } from "../../assets/icons/chat.svg";
import person from "../../assets/person/1.jpeg"

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="topbar-left">
        <span className="logo">Instashot</span>
      </div>
      <div className="topbar-center">
        <div className="search-bar">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search for friends, post or video"
            className="search-input"
          />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-links">
          <span className="topbar-link">Home</span>
          <span className="topbar-link">Timeline</span>
        </div>
        <div className="topbar-icons">
          <div className="topbaricon-item">
            <Person className="topbar-svgs"  />
            <span className="topbaricon-badge">1</span>
          </div>
          <div className="topbaricon-item">
            <Chat className="topbar-svgs" />
            <span className="topbaricon-badge">1</span>
          </div>
          <div className="topbaricon-item">
            <Noti className="topbar-svgs" />
            <span className="topbaricon-badge">1</span>
          </div>
        </div>
        <img src={person} className="topbar-image" alt="" srcset="" />
      </div>
    </div>
  );
};

export default Navbar;
