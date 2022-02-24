import React, { useEffect } from 'react';
import Header from '../Components/Header/Header';


const ExchangePoints = () => {
    var classroom = JSON.parse(localStorage.getItem("classroom") || []);

    useEffect(() => {
        for(var x in classroom ){
            var sel = document.createElement("option");
            sel.innerHTML = classroom[x].name + " " + classroom[x].surname;
            sel.value  = classroom[x].id;
            document.getElementById("sender").appendChild(sel);
          }
          
          for(var x in classroom ){
            var sel = document.createElement("option");
            sel.innerHTML = classroom[x].name + " " + classroom[x].surname;
            sel.value  = classroom[x].id;
            document.getElementById("receiver").appendChild(sel);
          }
    }, []);
    

    return (
        <>
            <Header />
            <div>
                <select id="sender">
                    <option value="">Donar punts</option>
                </select>

                <input type="number"></input>

                <select id="receiver">
                    <option value="">Rebre punts</option>
                </select>
                <button>
                    Fer transferència
                </button>

            </div>
        </>
    )
}

export default ExchangePoints
