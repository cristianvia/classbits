import Header from '../Components/Header/Header';
import './RandomUserStyles.css';
import avatarData from "../data/avatarData.json";
import Avatar from '../Components/Avatar/Avatar';
import React, { useState, useEffect } from 'react/cjs/react.development';


export default function RandomUser() {
var randomAvatar = avatarData[0];
const [chosenAvatar, setChosenAvatar] = useState([]);

    const changeState = () => {
        setChosenAvatar(Math.floor(Math.random() * (30 - 1) + 1))
        console.log(chosenAvatar)
    }

    const getRandomAvatar = () => {
        var max = avatarData.length;
        var randomNumber = Math.floor(Math.random() * (max - 1) + 1);
        randomAvatar = avatarData[randomNumber];
    }

    getRandomAvatar();

    return (
        <>
            <Header />
            <main>
                <div style={{ padding: 70 }}>
                    <button class="createRandomButton" onClick={changeState}> Usuari aleatori </button>
                            <div class="randAvatar">
                                <Avatar
                                    id={randomAvatar.id}
                                    name={randomAvatar.name}
                                    surname={randomAvatar.surname}
                                    img={randomAvatar.img}
                                />
                            </div>
                </div>

            </main>
        </>
    );
}
