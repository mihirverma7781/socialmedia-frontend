import "./sidebar.css";
import {ReactComponent as Feed} from "../../assets/icons/feed.svg"
import {ReactComponent as Chat} from "../../assets/icons/chats.svg"
import {ReactComponent as Video} from "../../assets/icons/video.svg"
import {ReactComponent as Group} from "../../assets/icons/group.svg"
import {ReactComponent as Bookmark} from "../../assets/icons/bookmark.svg"
import {ReactComponent as Question} from "../../assets/icons/question.svg"
import {ReactComponent as Jobs} from "../../assets/icons/jobs.svg"
import {ReactComponent as Events} from "../../assets/icons/events.svg"
import {ReactComponent as Courses} from "../../assets/icons/cap.svg"
import Person from "../../assets/person/2.jpeg"
const Sidebar = () => {
  return (
    <>
        <div className="sidebar">
         <div className="sidebar-wrapper">
             <ul className="sidebar-list">
                <li className="sidebar-listitem">
                    <Feed className="side-icon"/>
                    <span className="sidebar-listitem-text">Feed</span>
                </li>
                <li className="sidebar-listitem">
                    <Chat className="side-icon"/>
                    <span className="sidebar-listitem-text">Chat</span>
                </li>
                <li className="sidebar-listitem">
                    <Video className="side-icon"/>
                    <span className="sidebar-listitem-text">Video</span>
                </li>
                <li className="sidebar-listitem">
                    <Group className="side-icon"/>
                    <span className="sidebar-listitem-text">Group</span>
                </li>
                <li className="sidebar-listitem">
                    <Bookmark className="side-icon"/>
                    <span className="sidebar-listitem-text">Bookmark</span>
                </li>
                <li className="sidebar-listitem">
                    <Question className="side-icon"/>
                    <span className="sidebar-listitem-text">Question</span>
                </li>
                <li className="sidebar-listitem">
                    <Jobs className="side-icon"/>
                    <span className="sidebar-listitem-text">Jobs</span>
                </li>
                <li className="sidebar-listitem">
                    <Events className="side-icon"/>
                    <span className="sidebar-listitem-text">Events</span>
                </li>
                <li className="sidebar-listitem">
                    <Courses className="side-icon"/>
                    <span className="sidebar-listitem-text">Courses</span>
                </li>
            </ul> 
            <button className="sidebar-btn">
                Show More
            </button>
            <hr className="sidebar-hr" />
            <ul className="sidebar-friendlist">
                <li className="sidebar-friend">
                    <img className="sidebar-friendimg" src={Person} alt="" />
                    <span className="sidebar-friendname">Jhon Doe</span>
                </li>
                <li className="sidebar-friend">
                    <img className="sidebar-friendimg" src={Person} alt="" />
                    <span className="sidebar-friendname">Jhon Doe</span>
                </li>
                <li className="sidebar-friend">
                    <img className="sidebar-friendimg" src={Person} alt="" />
                    <span className="sidebar-friendname">Jhon Doe</span>
                </li>
                <li className="sidebar-friend">
                    <img className="sidebar-friendimg" src={Person} alt="" />
                    <span className="sidebar-friendname">Jhon Doe</span>
                </li>
                <li className="sidebar-friend">
                    <img className="sidebar-friendimg" src={Person} alt="" />
                    <span className="sidebar-friendname">Jhon Doe</span>
                </li>
                <li className="sidebar-friend">
                    <img className="sidebar-friendimg" src={Person} alt="" />
                    <span className="sidebar-friendname">Jhon Doe</span>
                </li>
                <li className="sidebar-friend">
                    <img className="sidebar-friendimg" src={Person} alt="" />
                    <span className="sidebar-friendname">Jhon Doe</span>
                </li>
                <li className="sidebar-friend">
                    <img className="sidebar-friendimg" src={Person} alt="" />
                    <span className="sidebar-friendname">Jhon Doe</span>
                </li>
                <li className="sidebar-friend">
                    <img className="sidebar-friendimg" src={Person} alt="" />
                    <span className="sidebar-friendname">Jhon Doe</span>
                </li>
                <li className="sidebar-friend">
                    <img className="sidebar-friendimg" src={Person} alt="" />
                    <span className="sidebar-friendname">Jhon Doe</span>
                </li>
                <li className="sidebar-friend">
                    <img className="sidebar-friendimg" src={Person} alt="" />
                    <span className="sidebar-friendname">Jhon Doe</span>
                </li>
            </ul>
         </div>
        </div>
    </>
  );
};

export default Sidebar;
