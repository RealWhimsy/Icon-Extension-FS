// this file will run once on extension load

var firebaseConfig = {
    apiKey: "AIzaSyDrk_yaTSagnU_SQbB3GRk7sWUt9R0GV3w",
    authDomain: "icon-extension.firebaseapp.com",
    databaseURL: "https://icon-extension.firebaseio.com",
    projectId: "icon-extension",
    storageBucket: "icon-extension.appspot.com",
    messagingSenderId: "775255884496",
    appId: "1:775255884496:web:4c9dd88f4b749c47b754d5",
    measurementId: "G-XSH92TJQ6H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

console.log(firebase);
var storage = firebase.storage();
var storageRef = storage.ref();
var mainCategoryRef = storageRef.child('MainCategories');
var subCategoryRef = storageRef.child('SubCategories');

console.log("test");

console.log(mainCategoryRef.listAll());


// instantiate global application state object for Chrome Storage and feed in firebase data
// Chrome Storage will store our global state as a a JSON stringified value.

const applicationState = { values: [] };
