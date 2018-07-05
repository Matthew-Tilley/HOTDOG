 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyABK0eNB_wdNzCavXUjxqeLTb_j_G2VSnc",
    authDomain: "hotdog-9177a.firebaseapp.com",
    databaseURL: "https://hotdog-9177a.firebaseio.com",
    projectId: "hotdog-9177a",
    storageBucket: "",
    messagingSenderId: "1086619698425"
  };

  firebase.initializeApp(config);

    let firestore = firebase.firestore();
    

    const docRef = firestore.doc("samples/sandwichData");
    const outputHeader = document.querySelector("#hotDogOutput");
    const inputTextField = document.querySelector("#latestHotDogStatus");
    const saveButton = document.querySelector("#saveButton");

    saveButton.addEventListener("click", function() {
        const textToSave = inputTextField.value;
        console.log("I am going to save " + textToSave + " to Firestore");
        docRef.set({
            hotDogStatus: textToSave
        })
    })
                                                


