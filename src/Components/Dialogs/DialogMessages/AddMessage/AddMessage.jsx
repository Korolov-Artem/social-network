import React from "react";


const AddMessage = (props) => {
    
    let DialogMessageElement = React.createRef()
    
    let addMessage = () => {
        let text = DialogMessageElement.current.value
        alert(text)
    }
    
    return (
        <div className="Dialogs__AddMessage">
            <textarea ref={DialogMessageElement} className="Dialogs__AddMessage_textarea" contentEditable={true}/>
            <button onClick={addMessage} className="Dialogs__AddMessage_button">Send</button>
        </div>
    )
}

export default AddMessage