import Post from "../post";
import Share from "../share";
import "./feed.css";

const Feed = () => {
  return (
    <>
      <div className="feed">
        <div className="feed-wrapper">
          <Share/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
      </div>
    </>
  );
};

export default Feed;
