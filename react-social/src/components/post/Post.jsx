import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState} from "react";
// import axios from "axios";
// import { format } from "timeago.js";
// import { Link } from "react-router-dom";
import { Users } from "../../dummyData";
import { handleBreakpoints } from "@mui/system";

export default function Post({ post }) {
  const [like,setLike] = useState(post.like);
  const [isLiked,setIsLiked] = useState(false);
  // const [user,setUser] = useState({});
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await axios.get(`users ? userId = ${post.userId}`);
  //     setUser(res.data)
  //   };
  //   fetchUser();
  // }, [post.userId]);

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
          {/* <Link to={`/profile/${user.username}`} */}
            <img
              className="postProfileImg"
              src={ Users.filter((u) => u.id === post?.userId)[0].profilePicture
                // user.profilePicture
                //   ? PF + user.profilePicture
                //   : PF + "person/nopic.jpg"
              }
              alt=""
            />
          {/* </Link> */}
            <span className="postUsername">
              {/* {user.username} */}
              { Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.caption}</span>     
           {/* desc instead of caption */}
          <img className="postImg" src={post.img} alt="" />   
          {/* photo instaed of img     */}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />        
            <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />         
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}