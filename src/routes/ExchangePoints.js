import React, { useEffect } from 'react';
import Header from '../Components/Header/Header';


const ExchangePoints = () => {
    var classroom = JSON.parse(localStorage.getItem("classroom") || []);
    let audioExchange = new Audio("./audio/exchange.wav")


    useEffect(() => {
        for (var x in classroom) {
            var sel = document.createElement("option");
            sel.innerHTML = classroom[x].name + " " + classroom[x].surname;
            sel.value = classroom[x].id;
            document.getElementById("sender").appendChild(sel);
        }

        for (var x in classroom) {
            var sel = document.createElement("option");
            sel.innerHTML = classroom[x].name + " " + classroom[x].surname;
            sel.value = classroom[x].id;
            document.getElementById("receiver").appendChild(sel);
        }
    }, []);

    const exchangeSound = () => {
        audioExchange.play()
    }

    const exchangePoints = () => {
        var e = document.getElementById("sender");
        var senderId = e.value;

        var e = document.getElementById("receiver");
        var receiverId = e.value;

        var e = document.getElementById("points");
        var points = e.value;

        var senderActualPoints = parseInt(localStorage.getItem(senderId));
        var receiverActualPoints = parseInt(localStorage.getItem(receiverId));

        //ACONSEGUIR QUE RESTI, CAL ACONSEGUIR TROBAR EL VALOR ACTUAL DEL STORAGE I INCREMENTARLO O FER-LO BAIXAR

        window.localStorage.setItem(senderId, senderActualPoints - parseInt(points));
        window.localStorage.setItem(receiverId, receiverActualPoints + parseInt(points));
        exchangeSound();
        alert("Intercanvi realitzat amb èxit!");
    }

    return (
        <>
            <Header />
            <div>
                <select id="sender">
                    <option value="">Donar punts</option>
                </select>

                <input type="number" id="points"></input>

                <select id="receiver">
                    <option value="">Rebre punts</option>
                </select>
                <button onClick={exchangePoints}>
                    Fer transferència
                </button>

            </div>
        </>
    )
}

export default ExchangePoints
