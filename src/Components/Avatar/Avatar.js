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

    const substractAll = () => {
        Array.from(document.querySelectorAll(".subtract-count")).forEach(button=>button.click())
      }
    
      const addAll = () => {
        Array.from(document.querySelectorAll(".add-count")).forEach(button=>button.click())
      }

    return (
        <li id={props.id}>
            <span className={(count > 0) ? "circleGreen" : (count < 0) ? "circleRed" : "circle"}>{(props.id == 0) ? "" : count}</span>
            <img src={props.img} width="250" alt="Avatar" />
            <span class="name">{props.name}</span>
            <span class="surname">{props.surname}</span>
            <button class="subtract-count" onClick={() => (props.id == 0) ? (substractAll(), setCount(count - 1)) : setCount(count - 1)}>-</button>&nbsp;
            <button class="add-count" onClick={() => (props.id == 0) ? (addAll(), setCount(count + 1)) : setCount(count + 1)}>+</button>
        </li>
    );
}

export default Avatar;