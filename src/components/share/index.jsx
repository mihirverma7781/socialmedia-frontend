import "./share.css"
import Person from "../../assets/person/1.jpeg"
import {ReactComponent as Media} from "../../assets/icons/media.svg"
import {ReactComponent as Tag} from "../../assets/icons/tag.svg"
import {ReactComponent as Location} from "../../assets/icons/location.svg"
import {ReactComponent as Feeling} from "../../assets/icons/feeling.svg"
const Share = () => {
    return (
        <>
            <div className="share">
                <div className="share-wrapper">
                    <div className="share-top">
                        <img src={Person} className="share-pp" alt="" />
                        <input type="text" placeholder="What's in your mind mihir ?" className="share-input" />
                    </div>
                    <hr className="share-hr" />
                    <div className="share-bottom">
                        <div className="share-options">
                            <div className="share-option">
                            <Media className="media-icon"/>
                            <span className="share-options-text">Photo or Video</span>
                            </div>
                            <div className="share-option">
                            <Tag className="media-icon"/>
                            <span className="share-options-text">Tags</span>
                            </div>
                            <div className="share-option">
                            <Location className="media-icon"/>
                            <span className="share-options-text">Location</span>
                            </div>
                            <div className="share-option">
                            <Feeling className="media-icon"/>
                            <span className="share-options-text">Feeling</span>
                            </div>
                        </div>
                        <button className="share-button">Share</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Share
