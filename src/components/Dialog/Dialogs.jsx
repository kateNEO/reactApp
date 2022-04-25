import dialogsStyle from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

let DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
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
let Dialogs = () => {
    return (
        <div className={dialogsStyle.dialogs}>
            <div className={dialogsStyle.dialogsItems}>
                <DialogItem id="daniil" name="Daniil"/>
                <DialogItem id="mihail" name="Mihail"/>
                <DialogItem id="sergey" name="Sergey"/>
            </div>

            <div className={dialogsStyle.chat}>
                <MessageItem message="Hi!"/>
                <MessageItem message="How are you?"/>
                <MessageItem message="Will we speak english?"/>
            </div>
        </div>

    )
}
export default Dialogs