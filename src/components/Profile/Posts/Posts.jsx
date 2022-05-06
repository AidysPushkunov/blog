import s from "./MyPosts.module.css"

const MyPosts = () => {
    return (
        <div className={s.user}>
            <div className={s.avatar}/>
            <div className={s.info}>
                Name, Age
            </div>
        </div>
    );
}

export default MyPosts;