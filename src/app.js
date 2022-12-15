
import { initializeApp } from "firebase/app"
import {
    onSnapshot,
    getFirestore,
    collection,
    addDoc,
    deleteDoc,
    doc,
    query,where,
    orderBy,serverTimestamp,
    getDoc,
} from 'firebase/firestore'

console.log('Hello i am App.js');  


const firebaseConfig = {
    apiKey: "AIzaSyBKt9WQuyMAostTmdvGwCvd3JwlVZQtZ3Y",
    authDomain: "zeland-green-lead.firebaseapp.com",
    projectId: "zeland-green-lead",
    storageBucket: "zeland-green-lead.appspot.com",
    messagingSenderId: "681778431372",
    appId: "1:681778431372:web:e2cb9e3362b8e4aeac02a9"
};

// init firebase app
initializeApp(firebaseConfig);

//init services
const db = getFirestore();

// collection ref
const colRef = collection(db, 'test');

// queries

// u can use where to find specific doc
//  const q = query(colRef,where("title",'==','Echo 1'), orderBy('createdAt'))

const q = query(colRef, orderBy('createdAt'))


onSnapshot(q, (snapshot) => {
    let tests = [];
    snapshot.docs.forEach((doc) => {
        tests.push({...doc.data(), id: doc.id})
    })
    //console.log(tests)

})



//get real-time collection data

onSnapshot(colRef, (snapshot) => {
    let tests = [];
    snapshot.docs.forEach((doc) => {
        tests.push({...doc.data(), id: doc.id})
    })
    //console.log(tests)

})


const addTestForm = document.querySelector('.add');
addTestForm.addEventListener('submit',(e) => {
    e.preventDefault()
    addDoc(colRef,{
        title: addTestForm.title.value,
        value: addTestForm.value.value,
        createdAt: serverTimestamp()
    })
    .then(() => {
        addTestForm.reset()
    })
})

//deleting document
const deleteTestForm = document.querySelector('.delete');
deleteTestForm.addEventListener('submit',(e) => {
    e.preventDefault()

    const docRef = doc(db,'test',deleteTestForm.id.value)

    deleteDoc(docRef)
        .then(() => {
            deleteTestForm.reset();
        })
})

// get a single doc

const docRef = doc( db , 'test', "F2gSCrB907HuoW98nV9N")


onSnapshot(docRef, (doc) => {
    //console.log(doc.data(), doc.id)
})

