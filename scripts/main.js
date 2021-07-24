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