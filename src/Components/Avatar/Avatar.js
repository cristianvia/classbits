import "./styles.css";
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Tabs from "../Tab/Tabs";

import positiveData from "../../data/positiveData.json";
import negativeData from "../../data/negativeData.json";
import exchangeData from "../../data/exchangeData.json";


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

    //Add sounds when points interaction
    let audioCorrect = new Audio("./audio/correct.wav")
    let audioFail = new Audio("./audio/fail.mp3")
    let audioExchange = new Audio("./audio/exchange.wav")

    const correct = () => {
        audioCorrect.play()
    }
    const fail = () => {
        audioFail.play()
    }

    const exchange = () => {
        audioExchange.play()
    }

    //Count the total amount of points stored in localstorage
    // const [totalPoints, setTotalPoints] = useState(0);
    // var totalSumandos = 0;

    // const checkTotal = () => {
    //     if(localStorage.length > 0){
    //         const sumandos = []
    //         for (let i=0, len=localStorage.length; i<len; i++){
    //             let key = localStorage.key(i); 
    //             let val = parseInt(localStorage.getItem(key));
    //             sumandos.push(val)
    //         }
    //         totalSumandos = sumandos.reduce((a, b) => a + b, 0);
    //         setTotalPoints(totalSumandos);
    //     }
    // };

    // useEffect(() => {
    //     checkTotal()
    // })

    return (
        <>
            <li className="avatarPointer" id={props.id} onClick={openModal}>
                <span className={(count > 0) ? "circleGreen" : (count < 0) ? "circleRed" : "circle"}>{(props.id === 0) ? "" : count}</span>
                <img src={props.img} width="250" alt="Avatar" />
                <span className="name">{props.name}</span>
                <span className="surname">{props.surname}</span>
                <button className="subtract-count" onClick={() => (props.id === 0) ? (substractAll(), setCount(count - 1)) : setCount(count - 1)}>-</button>&nbsp;
                <button className="add-count" onClick={() => (props.id === 0) ? (addAll(), setCount(count + 1)) : setCount(count + 1)}>+</button>
            </li>
            {(props.id === 0) ? <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{props.name} {props.surname}</h2>
                <div className="container">
                    <span className="counter">{(props.id === 0) ? "" : count}</span>
                    <img src={props.img} className="avatarImage" alt="Avatar" />


                    <Tabs>
                        <div label="👍 Positius">
                            <ul>
                                {positiveData.map((data) => {
                                    return (
                                        <div className="cardDescription" onClick={() => (props.id === 0) ? (addAll(), setCount(count + (data.points),correct())) : (setCount(count + (data.points)),correct())}>
                                            {data.emoji}&nbsp;
                                            {data.name}
                                            <span className="simpleCircle" style={{ backgroundColor: "green" }}> +{data.points}</span>
                                        </div>
                                    );
                                })}
                            </ul>
                        </div>
                        <div label="👎 Aspectes a millorar">
                            <ul>
                                {negativeData.map((data) => {
                                    return (
                                        <div className="cardDescription" onClick={() => (props.id === 0) ? (substractAll(), setCount(count - (data.points)), fail()) : (setCount(count - (data.points)), fail())}>
                                            {data.emoji}&nbsp;
                                            {data.name}
                                            <span className="simpleCircle" style={{ backgroundColor: "red" }}> -{data.points}</span>
                                        </div>
                                    );
                                })}
                            </ul>
                        </div>
                    </Tabs>
                </div>
                <button className="closeButton" onClick={closeModal}>Tancar</button>

            </Modal> : <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{props.name} {props.surname}</h2>
                <div className="container">
                    <span className="counter">{(props.id === 0) ? "" : count}</span>
                    <img src={props.img} className="avatarImage" alt="Avatar" />


                    <Tabs>
                        <div label="👍 Positius">
                            <ul>
                                {positiveData.map((data) => {
                                    return (
                                        <div className="cardDescription" onClick={() => (props.id === 0) ? (addAll(), setCount(count + (data.points),correct())) : (setCount(count + (data.points)),correct())}>
                                            {data.emoji}&nbsp;
                                            {data.name}
                                            <span className="simpleCircle" style={{ backgroundColor: "green" }}> +{data.points}</span>
                                        </div>
                                    );
                                })}
                            </ul>
                        </div>
                        <div label="👎 Aspectes a millorar">
                            <ul>
                                {negativeData.map((data) => {
                                    return (
                                        <div className="cardDescription" onClick={() => (props.id === 0) ? (substractAll(), setCount(count - (data.points)), fail()) : (setCount(count - (data.points)), fail())}>
                                            {data.emoji}&nbsp;
                                            {data.name}
                                            <span className="simpleCircle" style={{ backgroundColor: "red" }}> -{data.points}</span>
                                        </div>
                                    );
                                })}
                            </ul>
                        </div>
                        <div label="♻️ Bescanvis">
                            <ul>
                                {exchangeData.map((data) => {
                                    return (
                                        <div className="cardDescription" onClick={() => (props.id === 0) ? (substractAll(), setCount(count - (data.points), exchange())) : setCount(count - (data.points),exchange())}>
                                            {data.emoji}&nbsp;
                                            {data.name}
                                            <span className="simpleCircle" style={{ backgroundColor: "blue" }}> -{data.points}</span>
                                        </div>
                                    );
                                })}
                            </ul>
                            {/* 

                        //La cantidad deberá determinarse por el valor que venga de data y pasárselo a la función
                        Ejemplo: id:0, amount: 10,
                        exchangeAll(props.amount)
                        exchangeAll = () => {
                            for (var i = 0; i < props.amount; i++) {
                                Array.from(document.querySelectorAll(".subtract-count")).forEach(button => button.click())
                                i++= i;
                                }
                            
                        }
                        
                         */}
                        </div>
                    </Tabs>
                </div>
                <button class="closeButton" onClick={closeModal}>Tancar</button>

            </Modal>}
        </>
    );
}

export default Avatar;