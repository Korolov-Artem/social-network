import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator }
 from "../../../../Redux/dialogsReducer";


const AddMessage = (props) => {
    
    let newDialogsMessageElement = React.createRef()
    
    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let updateNewMessageText = () => {
        let newMessage = newDialogsMessageElement.current.value
        props.dispatch(updateNewMessageTextActionCreator(newMessage))
    }
    
    return (
        <div className="Dialogs__AddMessage">
            <textarea ref={newDialogsMessageElement} 
                className="Dialogs__AddMessage_textarea" 
                onChange={updateNewMessageText}
                value={props.newDialogsText}
            />
            <button
             onClick={addMessage}
             className="Dialogs__AddMessage_button"
             >Send</button>
        </div>
    )
}

export default AddMessage