import Header from '../Components/Header/Header';
import './DailySentenceStyles.css';
import dailySentence from "../data/dailySentenceData.json";

export default function DailySentence() {
    var myArray = dailySentence;
    function outPutOptions(arr) {
        var output = '';
        var length = arr.length;
        for (var x = 0; x < length; x++) {
            if (length - 1 === x) {
                output += arr[x] + '';
            } else {
                output += arr[x] + ', ';
            }
        }
        return output;
    }

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
                    <button class="createGroupsButton" type="button" onClick={getSentence}>Dime una frase bonita</button>
                    <div className="sentenceContainer">
                        <img src="/images/chibi_yoda.png" alt="yoda" width="350px" height="300px"/>
                        <div class="fraseBonita-container">
                            <h3 id="fraseBonita"></h3>
                        </div>
                    </div>
                </div>

            </main>
        </>
    );
}
