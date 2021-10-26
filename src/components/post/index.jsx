import Person from "../../assets/person/3.jpeg"
import Person2 from "../../assets/person/4.jpeg"
import "./post.css"
import {ReactComponent as More} from "../../assets/icons/more.svg";
import {ReactComponent as Heart} from "../../assets/icons/heart.svg";
import {ReactComponent as Like} from "../../assets/icons/like.svg";

const Post = () => {
    return (
        <>
            <div className="post">
                <div className="post-wrapper">
                    <div className="post-top">
                        <div className="post-topleft">
                            <img src={Person} alt="" className="post-profileimg" />
                            <span className="post-username">Justine Valentine</span>
                            <span className="post-date">5 mins ago</span>
                        </div>
                        <div className="post-topright">
                            <More className="post-icon"/>
                        </div>
                    </div>
                    <div className="post-center">
                        <span className="post-text">Hey! this is my new post :)</span>
                        <img src={Person2} alt="" className="post-image"/>
                    </div>
                    <div className="post-bottom">
                        <div className="post-bottonleft">
                            <Like className="post-likeicon"/>
                            <Heart className="post-likeicon"/>
                            <span className="like-counter">23 people liked it</span>
                        </div>
                        <div className="post-bottonright">
                            <span className="postcommenttext">
                                9 comments
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post
