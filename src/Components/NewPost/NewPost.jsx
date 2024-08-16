import React from "react";
import './NewPost.css'
const NewPost = (props) => {

    let newPostElement = React.createRef();
    
    let onPostChange = () => {
        let textChange = newPostElement.current.value;
        props.updateNewPostText(textChange)
    }

    return (
        <div className="Profile__newPost">
            <textarea ref={newPostElement} placeholder="What's on your mind, chab?"
                      className="Profile__newPost__textarea"
                        onChange={onPostChange} value={props.newPostText}>
            </textarea>
            <div className="Profile__newPost__postButton">
                <button onClick={props.addPost}>
                    Post
                </button>
            </div>
        </div>
    )
}

export default NewPost