import React from 'react'
import './Settings.css'
import Header from '../Components/Header/Header';
import { Link } from "react-router-dom";

var classroom = JSON.parse(localStorage.getItem("classroom") || []);

function deleteClassroom() {
    if (
        window.confirm("Estàs segur que vols borrar aquesta classe?")
    ) {
        window.localStorage.clear();
        alert("Classe borrada correctament")
        setTimeout(() => window.location.reload(), 500)
    }
}

//delete points
function resetPoints() {
    for (let index = 0; index < classroom.length; index++) {
        localStorage.setItem(index, 0)      
    }
    alert("Punts restaurats a 0")
        setTimeout(() => window.location.reload(), 500)
}

//Backup functions

var localStorageBackup = function () {
    var backup = {};
    var i;
    for (i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        backup[key] = escape(encodeURIComponent(value));
    }
    var json = JSON.stringify(backup);
    var base = btoa(json);
    var href = 'data:text/javascript;charset=utf-8;base64,' + base;
    var link = document.createElement('a');
    link.setAttribute('download', 'backup.json');
    link.setAttribute('href', href);
    document.querySelector('body').appendChild(link);
    link.click();
    link.remove();
};

var localStorageRestore = function () {
    var t = document.createElement('div');
    var a = document.createElement('a');
    a.appendChild(document.createTextNode('X'));
    a.setAttribute('href', '#');

    a.style.position = 'absolute';
    a.style.top = '10px';
    a.style.right = '10px';
    a.style['text-decoration'] = 'none';
    a.style.color = '#fff';
    t.appendChild(a);
    a.onclick = function () {
        t.remove();
    };
    t.style.width = '50%';
    t.style.position = 'absolute';
    t.style.top = '25%';
    t.style.left = '25%';
    t.style['background-color'] = 'gray';
    t.style['text-align'] = 'center';
    t.style.padding = '50px';
    t.style.color = '#fff';
    t.style['z-index'] = 10000;

    var l = document.createElement('input');
    l.setAttribute('type', 'file');
    l.setAttribute('id', 'fileinput');
    l.onchange = function (e) {
        t.remove();
        var f = e.target.files[0];
        if (f) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var text = e.target.result;
                var backup = JSON.parse(text);
                for (var key in backup) {
                    var value = decodeURIComponent(unescape(backup[key]));
                    window.localStorage.setItem(key, value);
                }
                alert('Importats ' + Object.keys(backup).length + ' arxius de seguretat.')
            };
            reader.readAsText(f);
        } else {
            alert('Failed to load file');
        }
    };
    var a = document.createElement('h3');
    a.appendChild(document.createTextNode("Importa la còpia de seguretat"));
    t.appendChild(a);
    t.appendChild(l);
    document.querySelector('body').appendChild(t);
};

const Settings = () => {
    return (
        <div>
            <Header />
            <div className="centerDivs">
                <h2>Configuració de classe</h2>
                <div className="settings">
                    <p><Link to="/add">
                        <button className="button-success">Afegir alumnes</button>
                    </Link></p>
                    <p><Link to="/EditClassroom">
                        <button className="button-secondary">Editar alumnes</button>
                    </Link></p>
                    <p><button className="button-error" onClick={deleteClassroom}>Borrar classe</button></p>&nbsp;
                    <p><button className="button-error" onClick={resetPoints}>Reset punts</button></p>
                </div>

                {/* Rules */}
                <h2>Configuració de normes</h2>

                <div className="settings settingsRules">
                    <p><Link to="/addPositive">
                        <button className="button-success">Afegir positius</button>
                    </Link></p>

                    <p><Link to="/addNegative">
                        <button className="button-warning">Afegir negatius</button>
                    </Link></p>
                    <p><Link to="/addExchange">
                        <button className="button-secondary">Afegir bescanvis</button>
                    </Link></p>
                </div>
                <div className="settings settingsRules">
                    <p><Link to="/editBehaviourP">
                        <button className="button-success">Editar positius</button>
                    </Link></p>
                    <p><Link to="/editBehaviourN">
                        <button className="button-warning">Editar negatius</button>
                    </Link></p>

                    <p><Link to="/editBehaviourE">
                        <button className="button-secondary">Editar bescanvis</button>
                    </Link></p>
                </div>

                {/* Backup */}
                <div>
                    <p><h2>Còpies de seguretat</h2></p>

                    <button className="button-success" onClick={localStorageBackup}>Descarregar</button>
                    <button className="button-secondary" onClick={localStorageRestore}>Recuperar</button>
                </div>
            </div>
        </div>
    )
}

export default Settings
