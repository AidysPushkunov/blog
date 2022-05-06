import s from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.item}>
                <ul>
                    <li><a href="#">Главное</a></li>
                    <li><a href="#">Сообщения</a></li>
                    <li><a href="#">Новости</a></li>
                    <li><a href="#">Настройки</a></li>
                    <li><a href="#">Группы</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;