<template>

 <div>
       <h1 class="display-4">Jobs</h1>
      <ul class="list-group">
        <li v-for="job in jobs" :key="job.id" class="list-group-item">
          <h2 class="h4">{{ job.title }}</h2>
          <p>{{ job.details }}</p>
        </li>
      </ul>
     
       <ul class="list-group">
        <li v-for="user in users" :key="user.id" class="list-group-item">
          <h2 class="h4">{{ user.text }}</h2>
          <p>{{ user.date }}</p>
        </li>
      </ul>
     
      <input ref="newmessage" placeholder="new message">
      <button @click="addNewMessage">addnew</button>
 </div>
</template>

<script>
import { db, addDoc, collection, onSnapshot, orderBy, getDocs } from '@/firebase.js';
export default {
  data(){
    return {
        users: [],
       
        jobs: [
            {title: 'name', id: 1, details: 'test'},
            {title: 'name', id: 1, details: 'test'}
        ]
    }
 },

  mounted() {
    this.fetchUserData();
  },
  methods: {
    async addNewMessage() {
      try {
        // Validate that the new message is not empty
        const newMessage = this.$refs.newmessage.value.trim();
        if (!newMessage) {
          // Optionally, display an error message or prevent adding empty messages
          console.error('New message cannot be empty.');
          return;
        }

        // Add a new document to the 'messages' collection
        const newDocRef = await addDoc(collection(db, 'messages'), {
          text: newMessage,
          date: Date.now(),
        });

        console.log('Document added with ID:', newDocRef.id);

        // Clear the input field after successfully adding a new message
        this.$refs.newmessage.value = '';

        this.fetchUserData();


      } catch (error) {
        console.error('Error adding new message:', error.message);
        // Optionally, display an error message to the user
      }
    },
    
     async fetchUserData() {
        try {
          this.users = [];
              const q = collection(db, 'messages'); 
        const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
              const userData = {
                id: doc.id,
                text: doc.data().text,
                 date: new Date(doc.data().date).toLocaleDateString('en-US', {
                  month: 'long', // Full month name
                  day: 'numeric', // Day of the month
                  year: 'numeric', // Four-digit year
                }),
              };
              console.log(userData);
              this.users.push(userData);
          });
       this.users.sort((a, b) => b.date - a.date);
        } catch (e) {
console.error('Error fetching user data:', e);
        }
     }
  },
 
}
</script>
<style>
@import 'bootstrap/dist/css/bootstrap.min.css';

/* Add your custom styles here if needed */
</style>