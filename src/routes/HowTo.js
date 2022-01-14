import React from 'react'
import Header from '../Components/Header/Header';
import StudentHeader from "../Components/StudentHeader/StudentHeader"
import { Link } from "react-router-dom";


const HowTo = () => {
    return (
        <div>
            <Header />
            <div>
                Ara que ja heu creat tots els ChiBits només queden 2 passos:
                1. Comprimir les imatges arrossegant-les de 10 en 10 en <a href="https://compressor.io" target="_blank">aquest web</a>.
                2. Crear cada alumne dins de la secció <Link to="/add">classbits</Link>
            </div>
        </div>
    )
}

export default HowTo
