window.onload = function onLoad() {
    var speedX, speedY, color, context, canvas;
    var positionX = getRandomInt(0, 1000);
    var positionY = getRandomInt(0, 1000);
    var colors = ['#3399FF', '#0168b3', '#fc7753', '#88b83e', '#df928e', '#6bb6bb', '#f2cf01', '#7a8bc3'];
    var sign = [1, -1];

    init();
    window.onclick = changeSpeedAndColor;

    function init() {
        canvas = document.getElementById('my-canvas');

        if (canvas.getContext) {
            wrapper = document.getElementById('canvas-wrapper');
            canvas.setAttribute('width', wrapper.offsetWidth);
            canvas.setAttribute('height', wrapper.offsetHeight);

            changeSpeedAndColor();

            context = canvas.getContext('2d');
            setInterval(draw, 50);
            setInterval(changeSpeedAndColor, 2500);
        }
    }

    function draw() {
        context.globalCompositeOperation = "source-over";
        context.fillStyle = "rgba(8,8,12,.2)";
        context.globalCompositeOperation = "lighter";

        positionX += speedX;
        positionY += speedY;

        if (positionX < 0 || positionX > canvas.width) {
            speedX *= -1;
        }

        if (positionY < 0 || positionY > canvas.height) {
            speedY *= -1;
        }

        context.beginPath();
        context.fillStyle = color;
        context.arc(positionX, positionY, 8, 0, Math.PI * 2.0, true);
        context.fill();
    }

    function changeSpeedAndColor() {
        changeSpeed();
        changeColor();
    }

    function changeSpeed() {
        speedX = randomSpeed();
        speedY = randomSpeed();
    }

    function changeColor() {
        color = colors[getRandomInt(0, colors.length - 1)];
    }

    function randomSpeed() {
        return getRandomInt(10, 20) * sign[getRandomInt(0, 1)];
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};
