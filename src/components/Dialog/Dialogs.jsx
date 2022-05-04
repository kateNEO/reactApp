import dialogsStyle from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


let DialogItem = (props) => {
    let path = "/dialogs/" + props.name;
    return (
        <div className={dialogsStyle.item}>
            <div className={dialogsStyle.dialogAvatar}>img</div>
            <NavLink to={path} className={({isActive}) => isActive ? `${dialogsStyle.active}` : `${dialogsStyle.name}`}>{props.name}</NavLink>
        </div>
    )
}
let MessageItem =(props) => {
    return(
        <div className={dialogsStyle.message}>
            <div className={dialogsStyle.dialogAvatar}>img</div>
            <div className={dialogsStyle.text}>{props.message}</div>
        </div>
    )
}
let Dialogs = (props) => {
    let DialogsData = [
        {id: 1, name: 'Daniil'},
        {id: 2, name: 'Mihail'},
        {id: 3, name: 'Sergey'}
    ]
    let DialogsElements = DialogsData.map (dialog => <DialogItem key= {dialog.id} name= {dialog.name}/>)

    let MessagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Will we speak english?'}
    ]
    let MessagesElements = MessagesData.map (message => <MessageItem key = {message.id} message= {message.message}/> )
    return (
        <div className={dialogsStyle.dialogs}>
            <div className={dialogsStyle.dialogsItems}>
                {DialogsElements}
            </div>

            <div className={dialogsStyle.chat}>
                {MessagesElements}
            </div>
        </div>

    )
}
export default Dialogs