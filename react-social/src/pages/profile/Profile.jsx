import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
//import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
//import Rightbar from "../../components/rightbar/Rightbar";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router";

export default function Profile() {
// const PF = process.env.REACT_APP_PUBLIC_FOLDER;
// const [user,setUser] = useState({});
// const username = useParams().username;

// useEffect(() => {
//   const fetchUser = async () => {
//     const res = await axios.get(`/users?username=${username}`);
//     setUser(res.data)
//   };
//   fetchUser();
// }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/post3.jpeg"
                // { user.coverPicture
                  // ? PF + user.coverPicture
                  // : PF + "person/nocover.jpg"}
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/pic3.jpg"
                // {
                //   user.profilePicture
                //     ? PF + user.profilePicture
                //     : PF + "person/nopic.jpg"
                // }
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName"> Divyanshi Tiwari </h4>
                <span className="profileInfoDesc"> {user.bio} </span>
            </div>
          </div>
          <div className="profileRightBottom">
          <Feed username={username} />
          </div>
        </div>
      </div>
    </>
  );
}