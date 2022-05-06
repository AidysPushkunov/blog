import s from "./Profile.module.css"
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <nav className={s.profile}>
            <Posts/>
        </nav>
    );
}

export default Profile;