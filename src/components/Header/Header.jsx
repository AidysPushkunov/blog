import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.elements}>
                <div className={s.logo}></div>
                <div className={s.text}>MyBlog</div>
            </div>
        </header>
    );
}

export default Header;