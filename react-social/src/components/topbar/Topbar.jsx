import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import PagesIcon from '@mui/icons-material/Pages';
import HomeIcon from '@mui/icons-material/Home';
import BookmarkIcon from '@mui/icons-material/Bookmark';
// import {Link} from "react-router-dom";

export default function Topbar() {
  
  return (
   <div className="topbarContainer">
        <div className="topbarLeft">
          {/* <Link to="/" style={{textDecoration: "none"}}>  */}
          <span className="logo">BvConnect</span>
          {/* </Link> */}
        </div>
        <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon"/>
          <input
            placeholder="Search for friends or pages"
            className="searchInput"
          />
        </div>
        </div>
        <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Timeline</span>
        </div>
          <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <EventIcon/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <PagesIcon/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <BookmarkIcon/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsActiveIcon/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <HomeIcon/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>
        </div>
        <img src={process.env.REACT_APP_PUBLIC_FOLDER + 'person/pic1.jpg'} alt="" className="profilePic"/>
      </div>
    </div>
  );
}
