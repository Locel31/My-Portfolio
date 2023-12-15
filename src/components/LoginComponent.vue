<template>
  <v-app>
        <v-data-table :items="users" :headers="headers"></v-data-table>
    </v-app>
</template>

<script>
// import { collection, getDocs } from 'firebase/firestore';

// import { db } from '@/firebase.js';
// import { auth } from '@/firebase.js';
// import { ref, get, child } from 'firebase/database';

// export default {
//     name :'LoginComponent',
//   data() {
//     return {
//       users: [],
//        headers: [
//         { text: 'Name', value: 'name' },
//         { text: 'Email', value: 'email' },
//         // Add more headers as needed
//       ],
//     };
//   },
//   mounted() {
//     this.fetchUserData();
//   },
//   methods: {
//     async fetchUserData() {
//       try {
//         const usersCollection = collection(db, 'users');
//         const querySnapshot = await getDocs(usersCollection);


//         querySnapshot.forEach((doc) => {
//           // Assuming your user document structure has 'name' and 'email' fields
//           const userData = {
//             id: doc.id,
//             name: doc.data().name,
//             email: doc.data().email,
//             // Add more fields as needed
//           };
//           this.users.push(userData);
//         });
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     },
//   },
// };
// export default {
//     data() {
//     return {
//       user: null,
//       users: [], // Array to store user data from Firestore
//     };
//   },
//   mounted() {
//     // Check if the user is logged in
//     auth.onAuthStateChanged((user) => {
//       this.user = user;

//       // Fetch all user data from Firestore
//       if (user) {
//         this.fetchAllUserData();
//       }
//     });
//   },
//   methods: {
//     signIn() {
//       const provider = new firebase.auth.GoogleAuthProvider();
//       auth.signInWithPopup(provider);
//     },
//     signOut() {
//       auth.signOut();
//     },
//     fetchAllUserData() {
//       // Reference to the "users" collection in Firestore
//       const usersRef = db.collection('users');

//       // Fetch all user documents
//       usersRef.get()
//         .then((querySnapshot) => {
//           querySnapshot.forEach((doc) => {
//             // doc.data() is an object containing the document data
//             this.users.push(doc.data());
//              console.log('User Data:', userData);
//           });
//         })
//         .catch((error) => {
//           console.error('Error fetching user data: ', error);
//         });
//     },
//   },
   
// }
</script>

<style>

</style>