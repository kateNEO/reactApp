import navStyle from "./Nav.module.css"
import {NavLink} from "react-router-dom"
let Nav = () => {
    return (
        <nav className={navStyle.blockNav}>
            <div className={navStyle.item}>
                <NavLink to="/profile" className={({ isActive }) => isActive ? `${navStyle.active}` : `${navStyle.item}`} >Profile</NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to="/dialogs" className={({ isActive }) => isActive ? `${navStyle.active}` : `${navStyle.item}`}>Message</NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to="/news" className={({ isActive }) => isActive ? `${navStyle.active}` : `${navStyle.item}`}>News</NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to="/music" className={({ isActive }) => isActive ? `${navStyle.active}` : `${navStyle.item}`}>Music</NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to="/settings" className={({ isActive }) => isActive ? `${navStyle.active}` : `${navStyle.item}`}>Settings</NavLink>
            </div>
        </nav>
    )
}
export default Nav;
