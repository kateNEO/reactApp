import HeaderStyle from "./Header.module.css"
let Header = () => {
    return(
        <header className={HeaderStyle.headerBlock}>
            <img className={HeaderStyle.logo} src='https://i.pinimg.com/originals/65/fe/1a/65fe1a96d0aaf2554b22567a174d18b8.png'/>
        </header>
    )
}
 export default Header;
