import Header from '../Components/Header/Header';
import './SoundMeterStyles.css';
import { useEffect } from 'react';


export default function SoundMeter() {
    window.onload = function () {

        navigator.mediaDevices
            .getUserMedia({ audio: true, video: false })
            .then(function (stream) {
                var context = new AudioContext();
                var gainNode = context.createGain();

                var src = context.createMediaStreamSource(stream);
                src.connect(gainNode);
                gainNode.connect(context.destination);

                gainNode.gain.setTargetAtTime(0, context.currentTime, 0);

                var analyser = context.createAnalyser();

                var canvas = document.getElementById("canvas");
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                var ctx = canvas.getContext("2d");

                src.connect(analyser);
                gainNode.connect(analyser);

                var WIDTH = canvas.width;
                var HEIGHT = canvas.height;

                if (WIDTH <= 480) analyser.fftSize = 64;
                if (WIDTH > 480 && WIDTH < 768) analyser.fftSize = 128;
                if (WIDTH >= 768) analyser.fftSize = 256;


                var bufferLength = analyser.frequencyBinCount;

                var dataArray = new Uint8Array(bufferLength);


                var barWidth = WIDTH / bufferLength * 2.5;
                var barHeight;
                var x = 0;

                function renderFrame() {
                    requestAnimationFrame(renderFrame);

                    x = 0;

                    analyser.getByteFrequencyData(dataArray);

                    ctx.fillStyle = "lightgrey";
                    ctx.fillRect(0, 0, WIDTH, HEIGHT);

                    for (var i = 0; i < bufferLength; i++) {
                        barHeight = dataArray[i];

                        var r = barHeight + 25 * (i / bufferLength);
                        var g = 250 * (i / bufferLength);
                        var b = 50;

                        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
                        ctx.fillRect(x, HEIGHT - barHeight
                            , barWidth, barHeight);

                        x += barWidth + 1;
                    }
                }

                renderFrame();
            })
            .catch(function (err) {
                console.log("error:");
                console.log(err);
            });
    };

    return (
        <>
            <Header />
            <main>
                <div id="content">
                    <canvas id="canvas"></canvas>
                </div>
            </main>
        </>
    );
}
