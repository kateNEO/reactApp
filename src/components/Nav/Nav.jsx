import navStyle from "./Nav.module.css"
let Nav = () => {
    return (
        <nav className={navStyle.blockNav}>
            <div className={navStyle.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={navStyle.item}>
                <a href="/dialoge">Messages</a>
            </div>
            <div className={navStyle.item}>
                <a href="/nevs">News</a>
            </div>
            <div className={navStyle.item}>
                <a href="/music">Music</a>
            </div>
            <div className={navStyle.item}>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    )
}
export default Nav;
