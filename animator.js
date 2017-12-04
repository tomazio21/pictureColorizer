function loaded() {

    var intervalId;
    var music = document.getElementById('music');
    var canvas = document.getElementById('album');
    var context = canvas.getContext('2d');
    var album = new Image();
    var speed = 20;
    album.crossOrigin = "Anonymous";
    album.src = 'VampireWeekendSelfTitled.jpg';

    album.onload = function() {
        canvas.height = album.height;
        canvas.width = album.width;
        context.drawImage(album, 0, 0, album.width, album.height);
    };

    music.addEventListener("playing", function() {
        intervalId = setInterval(animate, speed);
    })
    music.addEventListener("pause", function() {
        clearInterval(intervalId);
    })

    var animate = function() {
        var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        var data = imageData.data;

        for (var i = 0; i < data.length; i += 4) {
            data[i]     = (data[i] + 1) % 255;     // red
            data[i + 1] = (data[i + 1] + 1) % 255; // green
            data[i + 2] = (data[i + 2] + 2) % 255; // blue
        }
        context.putImageData(imageData, 0, 0);
    };
}

