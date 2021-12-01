import Header from '../Components/Header/Header';
import './RandomUserStyles.css';
import avatarData from "../data/avatarData.json";
import Avatar from '../Components/Avatar/Avatar';
import React, { useState } from 'react/cjs/react.development';


export default function RandomUser() {
var randomAvatar = [];
// const [chosenAvatar, setChosenAvatar] = useState([""]);

//     const updateAvatarRender = () => {
//         setChosenAvatar([""])
//     }   

    const getRandomAvatar = () => {
        var max = avatarData.length;
        var randomNumber = Math.floor(Math.random() * (max - 1) + 1);
        randomAvatar = avatarData[randomNumber];
    }

    getRandomAvatar();
//onClick={updateAvatarRender}
    return (
        <>
            <Header />
            <main>
                <div style={{ padding: 70 }}>
                    <button class="createRandomButton" > Usuari aleatori </button>
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
