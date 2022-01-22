import Header from '../Components/Header/Header';
import './RandomUserStyles.css';
import Avatar from '../Components/Avatar/Avatar';
import React from 'react/cjs/react.development';


export default function RandomUser() {
    var randomAvatar = [];
    var classroom = JSON.parse(localStorage.getItem("classroom") || []);

    function refreshPage() {
        window.location.reload(false);
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
                        <Avatar
                            id={randomAvatar.id}
                            name={randomAvatar.name}
                            surname={randomAvatar.surname}
                            img={randomAvatar.img}
                            pet={(randomAvatar.pet == "") ? "" : randomAvatar.pet}
                        />
                    </div>
                </div>

            </main>
        </>
    );
}
