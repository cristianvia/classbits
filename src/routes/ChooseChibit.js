import React, { useState, useEffect } from 'react';

import Header from '../Components/Header/Header';
import { Link } from "react-router-dom";
import './ChooseChibit.css';


const ChooseChibit = () => {
    return (
        <div>
            <Header />
            <div style={{ padding: 50 }}>
                <p class="title center">Crea el teu Chibit</p>
                <a href="https://charat.me/en/chibi/create/" target="_blank"><div class="greenButton center">Crear Chibit</div></a>
                <div class="rowH">
                    <div class="columnH">
                        <p class="title">Escolleix el teu ChiBit</p>
                        <p class="subtitle">Només cal clicar el que vols i es descarregarà, després el podràs afegir a l'alumne que vulguis.</p>
                    </div>
                </div>
            </div>
            {/* Image Grid*/}
            <div class="rowCH centerCH">
                <div class="columnCH">
                    <a download="1" href="../../images/chibits/1.png"><img src="../../images/chibits/1.png" /></a>
                    <a download="2" href="../../images/chibits/2.png"><img src="../../images/chibits/2.png" /></a>
                    <a download="3" href="../../images/chibits/3.png"><img src="../../images/chibits/3.png" /></a>
                    <a download="4" href="../../images/chibits/4.png"><img src="../../images/chibits/4.png" /></a>
                    <a download="5" href="../../images/chibits/5.png"><img src="../../images/chibits/5.png" /></a>
                </div>
                <div class="columnCH">
                    <a download="6" href="../../images/chibits/6.png"><img src="../../images/chibits/6.png" /></a>
                    <a download="7" href="../../images/chibits/7.png"><img src="../../images/chibits/7.png" /></a>
                    <a download="8" href="../../images/chibits/8.png"><img src="../../images/chibits/8.png" /></a>
                    <a download="9" href="../../images/chibits/9.png"><img src="../../images/chibits/9.png" /></a>
                    <a download="10" href="../../images/chibits/10.png"><img src="../../images/chibits/10.png" /></a>
                </div>

                <div class="columnCH">
                    <a download="11" href="../../images/chibits/11.png"><img src="../../images/chibits/11.png" /></a>
                    <a download="12" href="../../images/chibits/12.png"><img src="../../images/chibits/12.png" /></a>
                    <a download="13" href="../../images/chibits/13.png"><img src="../../images/chibits/13.png" /></a>
                    <a download="14" href="../../images/chibits/14.png"><img src="../../images/chibits/14.png" /></a>
                    <a download="15" href="../../images/chibits/15.png"><img src="../../images/chibits/15.png" /></a>
                </div>
                <div class="columnCH">
                    <a download="16" href="../../images/chibits/16.png"><img src="../../images/chibits/16.png" /></a>
                    <a download="17" href="../../images/chibits/17.png"><img src="../../images/chibits/17.png" /></a>
                    <a download="18" href="../../images/chibits/18.png"><img src="../../images/chibits/18.png" /></a>
                    <a download="19" href="../../images/chibits/19.png"><img src="../../images/chibits/19.png" /></a>
                    <a download="20" href="../../images/chibits/20.png"><img src="../../images/chibits/20.png" /></a>
                </div>
                <div class="columnCH">
                    <a download="21" href="../../images/chibits/21.png"><img src="../../images/chibits/21.png" /></a>
                    <a download="22" href="../../images/chibits/22.png"><img src="../../images/chibits/22.png" /></a>
                    <a download="23" href="../../images/chibits/23.png"><img src="../../images/chibits/23.png" /></a>
                    <a download="24" href="../../images/chibits/24.png"><img src="../../images/chibits/24.png" /></a>
                    <a download="25" href="../../images/chibits/25.png"><img src="../../images/chibits/25.png" /></a>
                </div>
                <div class="columnCH">
                    <a download="26" href="../../images/chibits/26.png"><img src="../../images/chibits/26.png" /></a>
                    <a download="27" href="../../images/chibits/27.png"><img src="../../images/chibits/27.png" /></a>
                    <a download="28" href="../../images/chibits/28.png"><img src="../../images/chibits/28.png" /></a>
                    <a download="29" href="../../images/chibits/29.png"><img src="../../images/chibits/29.png" /></a>
                    <a download="30" href="../../images/chibits/30.png"><img src="../../images/chibits/30.png" /></a>
                </div>
                <div class="columnCH">
                    <a download="31" href="../../images/chibits/31.png"><img src="../../images/chibits/31.png" /></a>
                    <a download="32" href="../../images/chibits/32.png"><img src="../../images/chibits/32.png" /></a>
                    <a download="33" href="../../images/chibits/33.png"><img src="../../images/chibits/33.png" /></a>
                    <a download="34" href="../../images/chibits/34.png"><img src="../../images/chibits/34.png" /></a>
                    <a download="35" href="../../images/chibits/35.png"><img src="../../images/chibits/35.png" /></a>
                </div>
                <div class="columnCH">
                    <a download="36" href="../../images/chibits/36.png"><img src="../../images/chibits/36.png" /></a>
                    <a download="37" href="../../images/chibits/37.png"><img src="../../images/chibits/37.png" /></a>
                    <a download="38" href="../../images/chibits/38.png"><img src="../../images/chibits/38.png" /></a>
                    <a download="39" href="../../images/chibits/39.png"><img src="../../images/chibits/39.png" /></a>
                    <a download="40" href="../../images/chibits/40.png"><img src="../../images/chibits/40.png" /></a>
                </div>
            </div>
        </div>
    )
}

export default ChooseChibit;