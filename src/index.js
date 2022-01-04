// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, } from "firebase/firestore";
import { async }from "@firebase/util";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA51T3Aa5gbX8hT64HSGQQfRmDKBEqbz-E",
    authDomain: "website-saylani.firebaseapp.com",
    projectId: "website-saylani",
    storageBucket: "website-saylani.appspot.com",
    messagingSenderId: "977712547617",
    appId: "1:977712547617:web:6b23ffa22cdf5c3f4b2060",
    measurementId: "G-W8JVHYLN7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore()
const foodCollectionReferance = collection(db, 'foods')
const form = document.getElementById('form')
console.log(form)
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    let obj = {
        name: form.name.value,
        price: form.prize.value,
        image: form.image.value,
        description: form.description.value
    }
    console.log(obj)
    const food = await addDoc(foodCollectionReferance,obj)
    console.log(food)
    name:form.name.value=''
    price:form.prize.value=''
    image:form.image.value=''
    description:form.description.value=''
})
