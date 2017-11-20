import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MASSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// const expenses = [{
//     description: 'coffee', 
//     note: 'daily perk', 
//     amount: 2, 
//     createdAt: 8
// }, {
//     description: 'lunch', 
//     note: '', 
//     amount: 6, 
//     createdAt: 12
// }, {
//     description: 'snack', 
//     note: '', 
//     amount: 4, 
//     createdAt: 6
// }];

// expenses.map((expense) => {
//     database.ref('expenses')
//         .push(expense)
//         .then(() => {
//             console.log('added a new expense');
//         })
//         .catch((e) => {
//             console.log('failed to add expense', e);
//         });
// });
// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// const onValueChanged = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }, (error) => {
//     console.log(error);
// });

// setTimeout(() => {
//     database.ref('age').set(22);
// }, 2500);

// setTimeout(() => {
//     database.ref('age').set(23);
//     database.ref().off();
// }, 3500);

// setTimeout(() => {
//     database.ref('age').set(24);
// }, 4500);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Fetching failed', e);
//     });

// database.ref().set({
//     name: 'hongshen',
//     age: 26,
//     isSingle: true,
//     location: {
//         city: 'New York',
//         country: 'usa'
//     }
// }).then(() => {
//     console.log('success 1');
// }).catch((error) => {
//     console.log('Failed 1', error);
// });
// // database.ref().set('this is a test');
// // database.ref('age').set(27);

// database.ref('location/city').set('Jersey City');
// database.ref('attributes').set({
//     height: '176',
//     weight: '75'
// }).then(() => {
//     console.log('success 2');
// }).catch((error) => {
//     console.log('Failed 2', error);
// });

// database.ref().update({
//     name: 'Michael',
//     isSingle: null,
//     job: 'Software Engineer',
//     'location/city': 'Boston'
// });