import React from "react";
import './NewPost.css'

const NewPost = (props) => {

    let newPostElement = React.createRef();
    
    let updateNewPostText = () => {
        let newText = newPostElement.current.value;
        // props.dispatch(updateNewPostTextActionCreator(newText))
        props.updateNewPostText(newText)
    }

    let addPost = () => {
        // props.dispatch(addPostActionCreator())
        props.addPost()
    }

    return (
        <div className="Profile__newPost">
            <textarea ref={newPostElement} placeholder="What's on your mind, chab?"
                      className="Profile__newPost__textarea"
                        onChange={updateNewPostText} value={props.newPostText}>
            </textarea>
            <div className="Profile__newPost__postButton">
                <button onClick={addPost}>
                    Post
                </button>
            </div>
        </div>
    )
}

export default NewPost