import Header from '../Components/Header/Header';
import './SoundMeterStyles.css';
import { useEffect } from 'react';


export default function SoundMeter() {
    
    useEffect( () => {
    "use strict";
        var paths = document.getElementsByTagName('path');
        var visualizer = document.getElementById('visualizer');
        var mask = visualizer.getElementById('mask');
        var h = document.getElementsByTagName('h6')[0];
        var hSub = document.getElementsByTagName('h6')[1];
        var AudioContext;
        var audioContent;
        var start = false;
        var permission = false;
        var path;
        var seconds = 0;
        var loud_volume_threshold = 30;

        var soundAllowed = function (stream) {
            permission = true;
            var audioStream = audioContent.createMediaStreamSource(stream);
            var analyser = audioContent.createAnalyser();
            var fftSize = 1024;

            analyser.fftSize = fftSize;
            audioStream.connect(analyser);

            var bufferLength = analyser.frequencyBinCount;
            var frequencyArray = new Uint8Array(bufferLength);

            visualizer.setAttribute('viewBox', '0 0 255 255');

            for (var i = 0; i < 255; i++) {
                path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('stroke-dasharray', '4,1');
                mask.appendChild(path);
            }
            var doDraw = function () {
                requestAnimationFrame(doDraw);
                if (start) {
                    analyser.getByteFrequencyData(frequencyArray);
                    var adjustedLength;
                    for (var i = 0; i < 255; i++) {
                        adjustedLength = Math.floor(frequencyArray[i]) - (Math.floor(frequencyArray[i]) % 5);
                        paths[i].setAttribute('d', 'M ' + (i) + ',255 l 0,-' + adjustedLength);
                    }
                }
                //It must be commented, otherwise it starts an eternal hell loop of setAttribute to undefined whenever we change window
                // else {
                //     for (var i = 0; i < 255; i++) {
                //         paths[i].setAttribute('d', 'M ' + (i) + ',255 l 0,-' + 0);
                //     }
                // }
            }
            var showVolume = function () {
                setTimeout(showVolume, 500);
                if (start) {
                    analyser.getByteFrequencyData(frequencyArray);
                    var total = 0
                    for (var i = 0; i < 255; i++) {
                        var x = frequencyArray[i];
                        total += x * x;
                    }
                    var rms = Math.sqrt(total / bufferLength);
                    var db = 20 * (Math.log(rms) / Math.log(10));
                    db = Math.max(db, 0); // sanity check
                    h.innerHTML = Math.floor(db) + " dB";

                    if (db >= loud_volume_threshold) {
                        seconds += 0.5;
                        if (seconds >= 5) {
                            hSub.innerHTML = "Has estat en un ambient amb soroll durant<span> " + Math.floor(seconds) + " </span>seconds.";
                        }
                    }
                    else {
                        seconds = 0;
                        hSub.innerHTML = "";
                    }
                }
                else {
                    h.innerHTML = "";
                    hSub.innerHTML = "";
                }
            }

            doDraw();
            showVolume();
        }

        var soundNotAllowed = function (error) {
            h.innerHTML = "Has de donar accès al microfon";
            console.log(error);
        }


        document.getElementById('buttonStart').onclick = function () {
            if (start) {
                start = false;
                this.innerHTML = "Començar a mesurar";
                this.className = "green-button";
            }
            else {
                if (!permission) {
                    navigator.mediaDevices.getUserMedia({ audio: true })
                        .then(soundAllowed)
                        .catch(soundNotAllowed);

                    AudioContext = window.AudioContext || window.webkitAudioContext;
                    audioContent = new AudioContext();
                }
                start = true;
                this.innerHTML = "Parar el medidor";
                this.className = "red-button";
            }
        };
        return( () => {
            start = false;
        })
    },[])

    return (
        <>
            <Header />
            <div class="microphoneContainer">

                <svg preserveAspectRatio="none" id="visualizer" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnslink="http://www.w3.org/1999/xlink">
                    <defs>
                        <mask id="mask">
                            <g id="maskGroup"></g>
                        </mask>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" class="stop0" />
                            <stop offset="40%" class="stop40" />
                            <stop offset="60%" class="stop65" />
                            <stop offset="85%" class="stop85" />
                            <stop offset="100%" class="stop100" />
                        </linearGradient>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)" mask="url(#mask)"></rect>
                </svg>

                <h6 class="main-text" id="#micro1">Permet l'ús del microfon</h6>

                <h6 class="sub-text" id="#micro2"></h6>

                <div class="button-container"><button id="buttonStart" class="green-button">Medidor de so</button></div>

            </div>
        </>
    );
}
