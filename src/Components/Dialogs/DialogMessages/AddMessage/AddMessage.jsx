import React from "react";



const AddMessage = (props) => {
    
    let newDialogsMessageElement = React.createRef()
    
    let addMessage = () => {
        props.addMessage()
    }

    let updateNewMessageText = () => {
        let newMessage = newDialogsMessageElement.current.value
        props.updateNewMessageText(newMessage)
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