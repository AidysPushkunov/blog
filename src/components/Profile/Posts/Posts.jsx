import s from "./Posts.module.css"
import Post from "./Post/Post";

let text = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.';
let text2 = 'C++ — компилируемый, статически типизированный язык программирования общего назначения. Поддерживает такие парадигмы программирования, как процедурное программирование, объектно-ориентированное программирование, обобщённое программирование.';

const Posts = () => {
    return (
        <div className={s.posts}>
            <Post image={'http://demiart.ru/forum/uploads5/post-203175-1263932175.jpg'} firstName="Azhu" lastName="Malov" titleText="JavaScript" postText={text} />
            <Post image={'https://vjoy.cc/wp-content/uploads/2020/10/da741321fed2fc603a92b5cb13101ecc.png'} firstName="Aisana" lastName="Barlova" titleText="C++" postText={text2} />

        </div>
    );
}

export default Posts;