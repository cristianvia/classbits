import Header from '../Components/Header/Header';
import './RandomUserStyles.css';
import Avatar from '../Components/Avatar/Avatar';
import React, { useState } from 'react';


export default function RandomUser() {
    var randomAvatar = [];
    var classroom = JSON.parse(localStorage.getItem("classroom") || []);

    const [refresh, setRefresh] = useState(0);

    // function refreshPage() {
    //     window.location.reload(false);
    // }

    function refreshPage() {
        setRefresh(refresh + 1)
    }

    const getRandomAvatar = () => {
        var max = classroom.length;
        var randomNumber = Math.floor(Math.random() * (max - 1) + 1);
        randomAvatar = classroom[randomNumber];
    }

    getRandomAvatar();

    return (
        <>
            <Header />
            <main>
                <div style={{ padding: 70 }}>
                    <button class="createRandomButton" onClick={refreshPage}> Usuari aleatori </button>
                    <div class="randAvatar">
                        {(refresh == 0) ? "" : <Avatar
                            id={randomAvatar.id}
                            name={randomAvatar.name}
                            surname={randomAvatar.surname}
                            img={randomAvatar.img}
                            pet={(randomAvatar.pet == "") ? "" : randomAvatar.pet}
                        />}

                    </div>
                </div>

            </main>
        </>
    );
}
