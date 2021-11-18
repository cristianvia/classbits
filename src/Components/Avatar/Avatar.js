import "./styles.css";
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Tabs from "../Tab/Tabs";

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function Avatar(props) {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }


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
        Array.from(document.querySelectorAll(".subtract-count")).forEach(button => button.click())
    }

    const addAll = () => {
        Array.from(document.querySelectorAll(".add-count")).forEach(button => button.click())
    }

    return (
        <>
            <li id={props.id}>
                <span className={(count > 0) ? "circleGreen" : (count < 0) ? "circleRed" : "circle"}>{(props.id == 0) ? "" : count}</span>
                <img src={props.img} width="250" alt="Avatar" />
                <span class="name">{props.name}</span>
                <span class="surname">{props.surname}</span>
                <button class="subtract-count" onClick={() => (props.id == 0) ? (substractAll(), setCount(count - 1)) : setCount(count - 1)}>-</button>&nbsp;
                <button class="add-count" onClick={() => (props.id == 0) ? (addAll(), setCount(count + 1)) : setCount(count + 1)}>+</button>
            </li>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{props.name} {props.surname}</h2>

                <div class="container">
                    <img src={props.img} width="450" alt="Avatar" />
                    <Tabs>
                        <div label="Gator">
                            See ya later, <em>Alligator</em>!
                        </div>
                        <div label="Croc">
                            After 'while, <em>Crocodile</em>!
                        </div>
                        <div label="Sarcosuchus">
                            Nothing to see here, this tab is <em>extinct</em>!
                        </div>
                    </Tabs>
                </div>
                <button onClick={closeModal}>close</button>
            </Modal>
        </>
    );
}

export default Avatar;