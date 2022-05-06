import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.user}>
            <div className={s.info}>
                <div className={s.avatar} style={{ backgroundImage: `url(${props.image})` }}></div>
                <div className={s.name}>{ props.firstName } { props.lastName }</div>
            </div>
            <div className={s.text}>
                <h2>{props.titleText}</h2>
                <p>{props.postText}</p>
            </div>
        </div>
    );
}

export default Post;