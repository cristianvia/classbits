import "./styles.css";
import React, { useState, useEffect } from 'react';

function Avatar(props) {
    //Specify that the localstorage key equals the data id
    const key = props.id;

    const [count, setCount] = useState(() => {
        const persistedValue = window.localStorage.getItem(key);
        return persistedValue !== null ? JSON.parse(persistedValue) : 0;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(count));
    }, [count]);

    return (
        <li id={props.id}>
            <img src={props.img} width="250" alt="Avatar" />
            <span>{props.name}</span>
            <span>{count}</span>
            <button class="subtract-count" onClick={() => setCount(count - 1)}>-</button>&nbsp;
            <button class="add-count" onClick={() => setCount(count + 1)}>+</button>
        </li>
    );
}

export default Avatar;