const config = {
    firebase: {
        // TODO use secrets manager and/or environment variables
        apiKey: "AIzaSyBYNzF3bjfQjE2HbP9F5EFTBVRl_lcey20",
        authDomain: "stool-tool-314301.firebaseapp.com",
        projectId: "stool-tool-314301",
        storageBucket: "stool-tool-314301.appspot.com",
        messagingSenderId: "175378726505",
        appId: "1:175378726505:web:b8c1ff0bb510ccd9c6acf8",
    },
    actionCodeSettings: {
        url: 'https://stooltool-photos.web.app/photoshoot.html',
        handleCodeInApp: true
    }
}

firebase.initializeApp(config.firebase);



function torch (on) {
    // turn the torch on
    navigator.mediaDevices.enumerateDevices().then(devices => {

        const cameras = devices.filter((device) => device.kind === 'videoinput');
        const camera = cameras[cameras.length - 1];

        // Create stream and get video track
        navigator.mediaDevices.getUserMedia({
            video: {
                deviceId: camera.deviceId,
                facingMode: ['user', 'environment'],
                height: { ideal: 1080 },
                width: { ideal: 1920 }
            }
        }).then(stream => {
            const track = stream.getVideoTracks()[0];
            track.applyConstraints({
                advanced: [{ torch: on }]
            }).catch(err => {
                console.log(err)
            });
        });
    });
}

torch(true)




function snapPhoto () {
    const webcamElement = document.querySelector('video#arjs-video')
    const canvas = document.createElement('canvas')
    const webcam = new Webcam(webcamElement, 'user', canvas);
    const img = webcam.snap()
    const gallery = document.querySelector('div.gallery')
    gallery.appendChild(canvas)
    const ctx = canvas.getContext("2d");
    var image = new Image();
    image.onload = function () {
        ctx.drawImage(image, 0, 0);
    };
    image.src = img
    return img
}