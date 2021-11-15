import "./styles.css";

function Avatar(props) {
    return (
        <li id={props.id}>
            <img src={props.img} width="250" alt=""/>
            <span>{props.name}</span>
            <span>{props.points}</span>
            <div class="qty-holder">
                <button class="qty-dec">-</button>
                <input class="qty-adj" type="number" value="1" />
                <button class="qty-inc">+</button></div>
        </li>
    );
}

export default Avatar;