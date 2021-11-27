import Header from '../Components/Header/Header';
import './DailySentenceStyles.css';
import dailySentence from "../data/dailySentenceData.json";

export default function DailySentence() {
    var myArray = dailySentence;

    function getRandom() {
        return myArray[Math.floor(Math.random() * myArray.length)];
    }

    function getSentence() {
        document.getElementById('fraseBonita').innerHTML = getRandom()
    }

    return (
        <>
            <Header />
            <main>
                <div style={{ padding: 70 }}>
                    <button class="sentenceButton" type="button" onClick={getSentence}>Genera una frase bonica</button>
                    <div className="sentenceContainer">
                        <img src="/images/chibi_yoda.png" alt="yoda" width="350px" height="300px"/>
                        <div class="fraseBonitaContainer">
                            <h3 id="fraseBonita"></h3>
                        </div>
                    </div>
                </div>

            </main>
        </>
    );
}
